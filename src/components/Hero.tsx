import { Phone, FileText } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <img
              src="/image0.jpeg"
              alt="Duval Property Services"
              className="h-40 w-auto sm:h-48 md:h-56 lg:h-64 max-w-full object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 leading-tight text-gray-900">
            Lawn Care, Pressure Washing & Softwash
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-700 font-medium">
            Residential & Commercial • Free Estimates • Jacksonville / Duval County
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9045557821"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone size={24} />
              Call Now
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
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
