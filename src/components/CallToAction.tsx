import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0ea5e9] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                         radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`
      }}></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
          Ready to Get Started?
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl mb-10 sm:mb-12 text-blue-100 font-medium">
          Call or Text for a Free Estimate Today
        </p>
        <a
          href="tel:9045557821"
          className="inline-flex items-center gap-3 bg-white text-[#1e3a8a] px-10 sm:px-12 py-5 sm:py-6 rounded-xl font-bold text-xl sm:text-2xl hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
        >
          <Phone size={32} />
          (904) 555-7821
        </a>
      </div>
    </section>
  );
}
