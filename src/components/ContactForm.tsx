import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('Free Estimate Request from Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:info@duvalpropertyservices.com?subject=${subject}&body=${body}`;

    setIsSuccess(true);
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 sm:mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-5">
              Get Your Free Estimate
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          {isSuccess && (
            <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-xl p-5 flex items-center gap-3 text-green-800 animate-fade-in">
              <CheckCircle size={24} className="flex-shrink-0" />
              <p className="font-semibold">
                Opening your email client now. Thank you for your interest!
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0ea5e9] focus:outline-none transition text-lg"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-lg">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0ea5e9] focus:outline-none transition text-lg"
                placeholder="(904) 555-1234"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0ea5e9] focus:outline-none transition text-lg"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-lg">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0ea5e9] focus:outline-none transition resize-none text-lg"
                placeholder="Tell us about your property and what services you're interested in..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a8a] text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-[#1e40af] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Send size={22} />
              Get Free Estimate
            </button>

            <p className="text-center text-base text-gray-500 mt-5">
              Or call us directly at <a href="tel:9045557821" className="text-[#1e3a8a] font-semibold hover:underline">(904) 555-7821</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
