import { Scissors, Droplets, Sparkles, SquareStack } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Care',
    description: 'Professional mowing, edging, and trimming to keep your property looking pristine.',
  },
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description: 'High-powered cleaning for driveways, sidewalks, decks, and exterior surfaces.',
  },
  {
    icon: Sparkles,
    title: 'Softwash',
    description: 'Gentle yet effective cleaning for roofs, siding, and delicate painted surfaces.',
  },
  {
    icon: SquareStack,
    title: 'Paver Restoration',
    description: 'Restore the original beauty of your pavers with deep cleaning and sealing.',
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional property maintenance for homes and businesses
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
