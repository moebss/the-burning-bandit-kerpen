import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicePrices from './components/ServicePrices';
import TattooArtists from './components/TattooArtists';
import AboutUs from './components/AboutUs';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import GoogleReviews from './components/GoogleReviews';
import CostEstimator from './components/CostEstimator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import LegalModals from './components/LegalModals';

export default function App() {
  const [legalModal, setLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 flex flex-col font-sans selection:bg-[#c9a84c] selection:text-slate-950 pb-16 sm:pb-0 overflow-x-hidden">
      <Navbar onOpenContact={scrollToContact} />
      <main className="flex-grow">
        <Hero onOpenContact={scrollToContact} />
        <ServicePrices onOpenContact={scrollToContact} />
        <TattooArtists onOpenContact={scrollToContact} />
        <AboutUs />
        <BeforeAfterSlider />
        <GoogleReviews />
        <CostEstimator onOpenContact={scrollToContact} />
        <FAQ />
        <Contact />
      </main>
      <Footer onOpenLegal={(type) => setLegalModal(type)} />
      <MobileStickyBar onOpenContact={scrollToContact} />
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  );
}
