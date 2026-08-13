import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicePrices from './components/ServicePrices';
import TattooArtists from './components/TattooArtists';
import AboutUs from './components/AboutUs';
import GoogleReviews from './components/GoogleReviews';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import CostEstimator from './components/CostEstimator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      <Navbar onOpenContact={scrollToContact} />
      <main className="flex-grow">
        <Hero onOpenContact={scrollToContact} />
        <TrustStrip />
        <ServicePrices onOpenContact={scrollToContact} />
        <TattooArtists onOpenContact={scrollToContact} />
        <AboutUs />
        <GoogleReviews />
        <BeforeAfterSlider />
        <CostEstimator onOpenContact={scrollToContact} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
