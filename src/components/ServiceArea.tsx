import { MapPin } from 'lucide-react';

const areas = [
  'Jacksonville',
  'Duval County',
  'Atlantic Beach',
  'Neptune Beach',
  'Jacksonville Beach',
  'Ponte Vedra Beach',
  'Orange Park',
  'Surrounding Areas',
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
              <MapPin size={36} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5">
            Service Area
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-14">
            Proudly serving Jacksonville and the greater Duval County area
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-xl p-4 sm:p-5 font-semibold text-gray-800 hover:bg-gradient-to-br hover:from-blue-100 hover:to-cyan-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
