import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <>
      <header className="bg-black shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/image0.jpeg"
              alt="Duval Property Services"
              className="h-12 w-auto sm:h-16"
            />
          </div>
          <a
            href="tel:9045557821"
            className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <Phone size={20} />
            (904) 555-7821
          </a>
        </div>
      </header>

      <a
        href="tel:9045557821"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-blue-600 text-white px-4 py-4 flex items-center justify-center gap-2 font-bold text-lg shadow-lg hover:bg-blue-700 transition"
      >
        <Phone size={24} />
        Call Now: (904) 555-7821
      </a>
    </>
  );
}
