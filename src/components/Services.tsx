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
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional property maintenance for homes and businesses
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
