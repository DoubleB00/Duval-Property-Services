import { Clock, Building2, Award, FileText } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Clock,
      title: 'Fast Response Times',
      description: 'Quick scheduling and prompt service when you need it most',
    },
    {
      icon: Building2,
      title: 'Residential & Commercial',
      description: 'Trusted by homeowners and businesses throughout Jacksonville',
    },
    {
      icon: Award,
      title: 'Professional & Reliable',
      description: 'Experienced team dedicated to quality results every time',
    },
    {
      icon: FileText,
      title: 'Free Estimates',
      description: 'Transparent pricing with no-obligation free estimates',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5 text-center">
            Why Choose Duval Property Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-14 sm:mb-16 text-center max-w-3xl mx-auto">
            Your trusted partner for professional property maintenance in Jacksonville
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
