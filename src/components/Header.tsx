import { Phone, FileText } from 'lucide-react';

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/att.xpvixb5gxtviuiqfainsv-8emnocqu0fszybazeinqo.png.jpeg"
              alt="DUVAL Property Services"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </a>
          <a
            href="tel:9045557821"
            className="hidden sm:flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-all shadow-lg hover:shadow-xl"
          >
            <Phone size={20} />
            (904) 555-7821
          </a>
        </div>
      </header>

      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl safe-area-bottom">
        <div className="grid grid-cols-2">
          <a
            href="tel:9045557821"
            className="flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-4 py-4 font-bold text-base hover:bg-[#1e40af] transition-all active:bg-[#172554]"
          >
            <Phone size={20} />
            Call
          </a>
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center gap-2 bg-[#0ea5e9] text-white px-4 py-4 font-bold text-base hover:bg-[#0284c7] transition-all active:bg-[#0369a1]"
          >
            <FileText size={20} />
            Get Estimate
          </button>
        </div>
      </div>
    </>
  );
}
