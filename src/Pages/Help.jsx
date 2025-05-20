import React, { useState } from 'react';

function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of inverter systems do you offer?",
      answer: "We provide sine wave inverters, hybrid inverters, and solar-compatible systems for both homes and commercial setups."
    },
    {
      question: "How long do your batteries last?",
      answer: "Our high-quality batteries last between 3 to 7 years depending on usage, model, and maintenance."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we provide full installation services for inverters, solar panels, and backup systems with trained technicians."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order is placed, you'll receive a tracking ID and delivery updates via email or SMS."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-[#4b1c32] mb-6">Help & Support</h1>

        <p className="text-gray-700 mb-4">
          Welcome to the Help Center of <strong>Energy Storage System</strong>. We’re here to assist you with all your queries related to our inverter systems, batteries, solar solutions, installations, or product support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#4b1c32] mb-2">📦 Order & Delivery</h2>
            <p className="text-gray-700">
              Get help with order tracking, delivery schedules, installation queries, and bulk orders for commercial setups.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#4b1c32] mb-2">🔋 Product Support</h2>
            <p className="text-gray-700">
              Learn how to maintain your batteries, troubleshoot your inverters, and check compatibility with solar setups.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#4b1c32] mb-2">🛠 Installation & Service</h2>
            <p className="text-gray-700">
              Request service appointments, learn about AMC plans, or schedule solar panel installation.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#4b1c32] mb-2">💬 Need More Help?</h2>
            <p className="text-gray-700 mb-2">
              Reach out to our support team directly:
            </p>
            <ul className="text-gray-700">
              <li><strong>📞 Call:</strong> +91-9876543210</li>
              <li><strong>✉️ Email:</strong> support@energystorage.com</li>
              <li><strong>⏰ Support Hours:</strong> 9 AM - 6 PM (Mon-Sat)</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#4b1c32] mb-6">📖 Frequently Asked Questions</h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span className="text-2xl text-[#4b1c32]">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 transition-all duration-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Help;
