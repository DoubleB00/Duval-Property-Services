import { Scissors, Droplets, Sparkles, SquareStack } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Lawn Care',
    description: 'Professional mowing, edging, and trimming to keep your property looking pristine.',
    image: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description: 'High-powered cleaning for driveways, sidewalks, decks, and exterior surfaces.',
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sparkles,
    title: 'Softwash',
    description: 'Gentle yet effective cleaning for roofs, siding, and delicate painted surfaces.',
    image: 'https://images.pexels.com/photos/8962593/pexels-photo-8962593.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: SquareStack,
    title: 'Paver Restoration',
    description: 'Restore the original beauty of your pavers with deep cleaning and sealing.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 mb-14">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-6 lg:gap-10 items-center bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300`}
            >
              <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0ea5e9] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg sm:text-xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1e40af] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
