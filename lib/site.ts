export const site = {
  name: 'VELYQUA',
  localised: '维澜',
  tagline: 'Intelligence for living water',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://velyqua-website.vercel.app',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'https://velyqua.vercel.app',
  github: 'https://github.com/AndrewLamSingapore/velyqua-website',
  appGithub: 'https://github.com/AndrewLamSingapore/velyqua',
  contact: 'https://authority-engine-app.vercel.app/contact?source=velyqua',
  orqevia: 'https://authority-engine-app.vercel.app/orqevia',
  about: 'https://authority-engine-app.vercel.app/about',
} as const;
