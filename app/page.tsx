import Architecture from '@/components/Architecture';
import AquaNow from '@/components/AquaNow';
import CTA from '@/components/CTA';
import DigitalTwin from '@/components/DigitalTwin';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Manifesto from '@/components/Manifesto';
import Marquee from '@/components/Marquee';
import Nav from '@/components/Nav';
import Roadmap from '@/components/Roadmap';
import Showcase from '@/components/Showcase';
import Trust from '@/components/Trust';
import Vision from '@/components/Vision';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Marquee />
        <HowItWorks />
        <AquaNow />
        <Vision />
        <Architecture />
        <DigitalTwin />
        <Showcase />
        <Trust />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
