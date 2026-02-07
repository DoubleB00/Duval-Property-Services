import { Phone, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 blur-2xl scale-95 opacity-60"></div>
              <img
                src="/d3509e69-afbd-4c43-a5da-4ea3ff29c6fd.png"
                alt="DUVAL Property Services - Jacksonville Lawn Care & Pressure Washing"
                className="relative w-[280px] sm:w-[400px] md:w-[520px] lg:w-[600px] max-w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 sm:mb-6 leading-tight text-gray-900 tracking-tight">
            Lawn Care, Pressure Washing & Softwash
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 text-gray-700 font-semibold text-center leading-snug">
            <span className="block sm:inline">Residential & Commercial</span>
            <span className="hidden sm:inline"> • </span>
            <span className="block sm:inline">Free Estimates</span>
            <span className="hidden sm:inline"> • </span>
            <span className="block sm:inline">Jacksonville</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <a
              href="tel:9045557821"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 bg-[#1e3a8a] text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-[#1e40af] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5"
            >
              <Phone size={24} />
              Call Now
            </a>
            <button
              onClick={scrollToContact}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 bg-[#0ea5e9] text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-[#0284c7] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5"
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
