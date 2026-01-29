import { Scissors, Droplets, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Care',
    description: 'Professional mowing, edging, trimming, and lawn maintenance to keep your property looking pristine year-round.',
  },
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description: 'High-powered cleaning for driveways, sidewalks, decks, and exterior surfaces. Remove dirt, grime, and stains effectively.',
  },
  {
    icon: Sparkles,
    title: 'Softwashing',
    description: 'Gentle yet effective cleaning solution for delicate surfaces like roofs, siding, and painted areas without damage.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Professional property maintenance for homes and businesses
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 hover:shadow-xl transition"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
