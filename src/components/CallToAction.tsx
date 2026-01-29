import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-blue-100">
          Call or Text for a Free Estimate Today
        </p>
        <a
          href="tel:9045557821"
          className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-xl sm:text-2xl hover:bg-blue-50 transition shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          <Phone size={28} />
          (904) 555-7821
        </a>
      </div>
    </section>
  );
}
