'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  function generateId() {
    return Math.random().toString(36).substr(2, 9) + Date.now();
  }

  const id = generateId();
  const received = new Date().toISOString();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { id, name: formData.name, email: formData.email, message: formData.note, received }
        ),
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          note: ''
        });
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-12 rounded-3xl shadow-lg border-2 border-orange-200">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-white text-4xl">✓</span>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-slate-800">Thank You!</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We've received your message and will get back to you within 24 hours.
              One of our RV specialists will review your request and contact you soon.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all mr-4"
              >
                Send Another Message
              </button>
              <a
                href="/"
                className="inline-block border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-4 px-8 rounded-full transition-all"
              >
                Return to Home
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Need immediate assistance?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:4806306095" className="text-orange-600 font-bold text-lg hover:underline">
                  📞 480-630-6095
                </a>
                <span className="text-gray-400 hidden sm:block">|</span>
                <span className="text-gray-600">
                  📍 Apache Junction, AZ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-russo-one" style={{color: '#00B4F4'}}>
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Get in touch for expert RV repair services in Apache Junction
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Get In Touch</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Ready to get your RV back on the road? Fill out our contact form and we'll get back to you with a
                  free estimate. For urgent repairs, give us a call directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:4806306095" className="text-orange-600 hover:text-orange-700 hover:underline">
                        480-630-6095
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">Available by Appointment</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Location</h3>
                    <p className="text-gray-700">Apache Junction, Arizona</p>
                    <p className="text-sm text-gray-600">Serving Greater Phoenix Area</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Emergency Mobile Service</h3>
                    <p className="text-gray-700">
                      <span className="text-gray-600">Call or </span>
                      <a href="sms:4806306095" className="text-orange-600 hover:text-orange-700 hover:underline">
                        Text
                      </a>
                      <span className="text-gray-600"> Rob</span>
                    </p>
                    <p className="text-sm text-gray-600">Available by Appointment</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h3 className="font-bold text-slate-800 text-lg mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
                  <span>• Apache Junction</span>
                  <span>• Mesa</span>
                  <span>• Phoenix</span>
                  <span>• Scottsdale</span>
                  <span>• Tempe</span>
                  <span>• Chandler</span>
                  <span>• Gold Canyon</span>
                  <span>• Queen Creek</span>
                </div>
                <aside className="bg-orange-100 border-l-4 border-orange-500 p-3 rounded-r-lg">
                  <p className="text-sm text-slate-700 italic">
                    <strong>Out of the Phoenix Valley?</strong> We travel for larger jobs. 
                    <a href="tel:4806306095" className="text-orange-600 hover:text-orange-700 hover:underline ml-1">
                      Call Rob
                    </a> to discuss.
                  </p>
                </aside>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-orange-200">
              <h2 className="text-3xl font-bold mb-6 text-slate-800 text-center">
                Request a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-800 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="480-630-6095"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="note" className="block text-sm font-bold text-slate-800 mb-2">
                    Tell Us About Your RV Repair Needs
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors resize-vertical"
                    placeholder="Describe the issue with your RV, include make/model/year if possible, and any other details that might help us provide an accurate estimate..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg disabled:transform-none"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services CTA */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our experienced technicians can diagnose any RV issue. Give us a call for expert advice.
          </p>
          <a
            href="tel:4806306095"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Call Now: 480-630-6095
          </a>
        </div>
      </section>
    </div>
  );
}