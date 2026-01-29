import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Need a Free Estimate?
        </h2>
        <p className="text-2xl mb-10 text-blue-100">
          Call or Text Today
        </p>
        <a
          href="tel:9045557821"
          className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-lg font-bold text-2xl hover:bg-blue-50 transition shadow-xl"
        >
          <Phone size={32} />
          (904) 555-7821
        </a>
      </div>
    </section>
  );
}
