import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <Services />
        <About />
        <ServiceArea />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
