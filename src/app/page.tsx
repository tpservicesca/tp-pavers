import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CallNowStrip from '@/components/CallNowStrip';
import Services from '@/components/Services';
import About from '@/components/About';
import DynamicGallery from '@/components/DynamicGallery';
import FAQ from '@/components/FAQ';
import DynamicServiceAreaMap from '@/components/DynamicServiceAreaMap';
import ContactForm from '@/components/ContactForm';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CallNowStrip />
      <Services />
      <About />
      <DynamicGallery />
      <FAQ />
      <DynamicServiceAreaMap />
      <ContactForm />
      <FloatingButtons />
      <Footer />
    </>
  );
}
