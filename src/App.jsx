import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ConcertsSection from './components/ConcertsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { concerts } from './data/concerts';
import { services } from './data/services';

const App = () => (
  <div className="min-h-screen bg-[#F5F5F1] font-body text-gray-800">
    <Header />
    <main>
      <HeroSection />
      <ConcertsSection concerts={concerts} />
      <AboutSection />
      <ServicesSection services={services} />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default App;
