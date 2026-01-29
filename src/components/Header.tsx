import { Phone, FileText } from 'lucide-react';

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/image0.jpeg"
              alt="Duval Property Services"
              className="h-12 w-auto sm:h-14"
            />
          </div>
          <a
            href="tel:9045557821"
            className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            <Phone size={20} />
            (904) 555-7821
          </a>
        </div>
      </header>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl">
        <div className="grid grid-cols-2 gap-0">
          <a
            href="tel:9045557821"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-4 font-bold hover:bg-blue-700 transition"
          >
            <Phone size={20} />
            Call
          </a>
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center gap-2 bg-cyan-600 text-white px-4 py-4 font-bold hover:bg-cyan-700 transition"
          >
            <FileText size={20} />
            Get Estimate
          </button>
        </div>
      </div>
    </>
  );
}
