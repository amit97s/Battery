import React from 'react';

function About() {
  const testimonials = [
    {
      name: "Ravi Sharma",
      location: "New Delhi",
      feedback:
        "Energy Storage System installed a solar inverter at our home and we haven’t faced a single power issue since. Their team is professional and very responsive.",
    },
    {
      name: "Sneha Kapoor",
      location: "Mumbai",
      feedback:
        "Exceptional service! The battery backup is amazing, and their customer support is always ready to help. Highly recommended for residential solutions.",
    },
    {
      name: "Vikram Mehta",
      location: "Bangalore",
      feedback:
        "I ordered a commercial inverter setup for my business. From consultation to installation, everything was smooth and timely. Great job!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-[#4b1c32] mb-4">About Us</h1>

        <p className="text-gray-700 text-lg mb-4">
          <strong>Energy Storage System</strong> is a trusted leader in the power backup industry. With years of experience and a strong reputation for delivering reliable, eco-friendly energy solutions, we specialize in **inverter systems**, **advanced battery storage**, and **solar installations** for both homes and commercial businesses across India.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          Our goal is to empower every home and organization with uninterrupted power, reduce energy costs, and promote a sustainable future through innovative energy solutions.
        </p>

        <h2 className="text-2xl font-semibold text-[#4b1c32] mt-8 mb-2">🌟 Our Mission</h2>
        <p className="text-gray-700 text-lg mb-4">
          To revolutionize the way people experience power by providing energy-efficient, sustainable, and affordable power backup solutions using cutting-edge inverter and solar technologies.
        </p>

        <h2 className="text-2xl font-semibold text-[#4b1c32] mt-8 mb-2">🔭 Our Vision</h2>
        <p className="text-gray-700 text-lg mb-4">
          To become India’s most reliable and customer-focused energy solution provider, empowering every corner of the country with sustainable power systems.
        </p>

        <h2 className="text-2xl font-semibold text-[#4b1c32] mt-8 mb-2">💼 What We Offer</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg mb-8">
          <li>Residential and Commercial Inverter Systems</li>
          <li>Battery Backup Units and Maintenance Plans</li>
          <li>Complete Solar Panel Installation & Support</li>
          <li>Hybrid Solutions combining Solar + Inverter Tech</li>
          <li>24/7 Customer Support and AMC Services</li>
        </ul>

        {/* Testimonials Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[#4b1c32] mb-6">🗣 What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6">
                <p className="text-gray-700 italic">“{item.feedback}”</p>
                <div className="mt-4">
                  <p className="text-[#4b1c32] font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Energy Storage System. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default About;
