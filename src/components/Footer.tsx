import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-14 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Duval Property Services</h3>
            <p className="text-gray-400 leading-relaxed text-base">
              Professional lawn care, pressure washing, softwash, and paver restoration services in Jacksonville
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:9045557821"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Phone size={20} />
                <span className="text-base">(904) 555-7821</span>
              </a>
              <a
                href="mailto:info@duvalpropertyservices.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition break-all"
              >
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-base">info@duvalpropertyservices.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} />
                <span className="text-base">Jacksonville, FL</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Service Area</h3>
            <p className="text-gray-400 leading-relaxed text-base">
              Jacksonville, Atlantic Beach, Neptune Beach, Jacksonville Beach, Ponte Vedra Beach, Orange Park, and surrounding areas
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-base">
          <p>&copy; {currentYear} Duval Property Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
