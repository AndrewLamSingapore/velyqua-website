'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function makeGlowTexture(inner: string, outer: string): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.28, outer);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

export default function UnderwaterScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020a12, 0.05);

    const camera = new THREE.PerspectiveCamera(58, mount.clientWidth / mount.clientHeight, 0.1, 80);
    camera.position.set(0, 0.4, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x0a3040, 2.6));

    const snowCount = 420;
    const snowPos = new Float32Array(snowCount * 3);
    const snowSpeed = new Float32Array(snowCount);
    for (let i = 0; i < snowCount; i++) {
      snowPos[i * 3] = (Math.random() - 0.5) * 26;
      snowPos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      snowPos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      snowSpeed[i] = 0.004 + Math.random() * 0.012;
    }
    const snowGeo = new THREE.BufferGeometry();
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
    const snowMat = new THREE.PointsMaterial({
      color: 0x4af0e3,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const snow = new THREE.Points(snowGeo, snowMat);
    scene.add(snow);

    const orbCount = 42;
    const orbGroup = new THREE.Group();
    const orbTex = makeGlowTexture('rgba(140,240,232,0.95)', 'rgba(0,150,170,0.35)');
    const orbBase = new THREE.SpriteMaterial({
      map: orbTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.8,
    });
    const orbs: { sprite: THREE.Sprite; vy: number; base: number }[] = [];
    for (let i = 0; i < orbCount; i++) {
      const mat = orbBase.clone();
      const sprite = new THREE.Sprite(mat);
      const s = 0.35 + Math.random() * 1.4;
      sprite.scale.set(s, s, 1);
      sprite.position.set((Math.random() - 0.5) * 26, (Math.random() - 0.5) * 16, (Math.random() - 0.5) * 8 - 2);
      orbGroup.add(sprite);
      orbs.push({ sprite, vy: 0.0012 + Math.random() * 0.004, base: mat.opacity });
    }
    scene.add(orbGroup);

    const rayTex = makeGlowTexture('rgba(100,220,210,0.5)', 'rgba(0,90,110,0.0)');
    const ray = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: rayTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.22,
      }),
    );
    ray.scale.set(22, 14, 1);
    ray.position.set(-4, 2, -6);
    scene.add(ray);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointerMove);

    let raf = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const t = clock.getElapsedTime();
      const pos = snowGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < snowCount; i++) {
        let y = pos.getY(i) + snowSpeed[i];
        if (y > 8.5) y = -8.5;
        pos.setY(i, y);
        pos.setX(i, pos.getX(i) + Math.sin(t * 0.35 + i) * 0.0008);
      }
      pos.needsUpdate = true;

      for (const orb of orbs) {
        orb.sprite.position.y += orb.vy;
        if (orb.sprite.position.y > 8.5) orb.sprite.position.y = -8.5;
        (orb.sprite.material as THREE.SpriteMaterial).opacity =
          orb.base * (0.6 + 0.4 * Math.sin(t * 0.8 + orb.sprite.position.x));
      }

      camera.position.x += (pointer.x * 0.8 - camera.position.x) * 0.04;
      camera.position.y += (0.4 + pointer.y * 0.5 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, -4);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    if (reduced) {
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      snowGeo.dispose();
      snowMat.dispose();
      orbTex.dispose();
      rayTex.dispose();
      orbBase.dispose();
      orbGroup.traverse((o) => {
        const spr = o as THREE.Sprite;
        if (spr.material) (spr.material as THREE.SpriteMaterial).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
