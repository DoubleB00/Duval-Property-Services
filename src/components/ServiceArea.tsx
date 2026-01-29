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
    <section id="service-area" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
              <MapPin size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Service Area
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Proudly serving Jacksonville and the greater Duval County area
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 font-semibold text-gray-800 hover:shadow-md transition"
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
