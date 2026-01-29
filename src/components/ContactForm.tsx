import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const { error: submitError } = await supabase
      .from('contact_submissions')
      .insert([formData]);

    if (submitError) {
      setError('Failed to submit form. Please call us directly.');
      setIsSubmitting(false);
      return;
    }

    setIsSuccess(true);
    setIsSubmitting(false);
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          {isSuccess && (
            <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center gap-3 text-green-800">
              <CheckCircle size={24} />
              <p className="font-semibold">
                Thank you! We'll contact you soon with your free estimate.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-800">
              <p className="font-semibold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none"
                placeholder="Tell us about your property and what services you're interested in..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  <Send size={20} />
                  Get Free Estimate
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
