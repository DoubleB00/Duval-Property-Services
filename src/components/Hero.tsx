import { Phone, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white pt-24 sm:pt-32 pb-20 sm:pb-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Reliable Lawn Care & Pressure Washing in Jacksonville
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-blue-100">
            Residential & Commercial Property Services You Can Trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9045557821"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              <Phone size={24} />
              Call Now
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-600 transition shadow-lg"
            >
              <FileText size={24} />
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
