import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you! We’ll get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-[#4b1c32] mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            <strong>Energy Storage System</strong> is a leading power backup distribution company
            specializing in inverter systems, batteries, and solar solutions — serving both residential and commercial sectors.
          </p>
          <ul className="text-gray-700">
            <li className="mb-2"><strong>📍 Address:</strong> A-123, Industrial Area, Delhi, India</li>
            <li className="mb-2"><strong>📞 Phone:</strong> +91-9876543210</li>
            <li><strong>✉️ Email:</strong> contact@energystorage.com</li>
          </ul>
        </div>

        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b1c32]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b1c32]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#4b1c32]"
            />
            <button
              type="submit"
              className="bg-[#4b1c32] hover:bg-[#3a1527] text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
