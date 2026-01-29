import { Phone, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.12) 0%, transparent 50%)`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-10 sm:mb-12">
            <img
              src="/image0.jpeg"
              alt="Duval Property Services"
              className="h-44 w-auto sm:h-52 md:h-60 lg:h-72 max-w-full object-contain drop-shadow-xl"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 sm:mb-6 leading-tight text-gray-900 tracking-tight">
            Lawn Care, Pressure Washing & Softwash
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 text-gray-700 font-semibold">
            Residential & Commercial • Free Estimates • Jacksonville / Duval County
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <a
              href="tel:9045557821"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5"
            >
              <Phone size={24} />
              Call Now
            </a>
            <button
              onClick={scrollToContact}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 bg-cyan-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5"
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
