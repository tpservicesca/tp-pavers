import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* Orange Divider */}
      <div className="h-[55px] bg-brand-orange-dark" />
      <Services />
      <About />
      <Gallery />
      <FAQ />
      <ServiceAreaMap />
      <ContactForm />
      <Footer />
    </>
  );
}
