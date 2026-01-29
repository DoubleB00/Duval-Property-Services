import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
            About Duval Property Services
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed">
            Duval Property Services proudly serves the Jacksonville area with reliable,
            affordable, and professional property maintenance services.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Residential & Commercial
                </h3>
                <p className="text-gray-600">
                  We serve both homeowners and businesses throughout the area
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Professional Service
                </h3>
                <p className="text-gray-600">
                  Experienced team dedicated to quality workmanship
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Affordable Pricing
                </h3>
                <p className="text-gray-600">
                  Competitive rates with transparent, upfront estimates
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Reliable & Trustworthy
                </h3>
                <p className="text-gray-600">
                  On-time service you can count on, every time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
