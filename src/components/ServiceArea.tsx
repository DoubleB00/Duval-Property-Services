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
    <section id="service-area" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
              <MapPin size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Area
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10">
            Proudly serving Jacksonville and the greater Duval County area
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-blue-50 border border-blue-100 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 hover:bg-blue-100 hover:border-blue-200 transition"
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
