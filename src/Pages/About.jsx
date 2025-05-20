import React from 'react';
import { Battery, Sun, Zap, Shield, Clock, Award, Users, Lightbulb, Star } from 'lucide-react';

function About() {
  const services = [
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Inverter Systems",
      description: "State-of-the-art inverter solutions for homes and businesses"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Solutions",
      description: "Complete solar panel installation and maintenance services"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Battery Storage",
      description: "Advanced battery backup units with extended life"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AMC Services",
      description: "Comprehensive annual maintenance contracts"
    }
  ];

  const achievements = [
    {
      number: "1000+",
      text: "Installations Completed"
    },
    {
      number: "98%",
      text: "Customer Satisfaction"
    },
    {
      number: "24/7",
      text: "Support Available"
    },
    {
      number: "10+",
      text: "Years Experience"
    }
  ];

  const testimonials = [
    {
      name: "Ravi Sharma",
      role: "Homeowner",
      location: "New Delhi",
      rating: 5,
      feedback: "Energy Storage System installed a solar inverter at our home and we haven't faced a single power issue since. Their team is professional and very responsive.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Sneha Kapoor",
      role: "Business Owner",
      location: "Mumbai",
      rating: 5,
      feedback: "Exceptional service! The battery backup is amazing, and their customer support is always ready to help. Highly recommended for residential solutions.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Vikram Mehta",
      role: "Factory Manager",
      location: "Bangalore",
      rating: 5,
      feedback: "I ordered a commercial inverter setup for my business. From consultation to installation, everything was smooth and timely. Great job!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4b1c32] to-[#67273f] text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] mix-blend-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powering Tomorrow's Energy Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Energy Storage System is a trusted leader in power backup solutions, specializing in inverter systems, advanced battery storage, and solar installations for both residential and commercial sectors.
            </p>
            <div className="flex items-center space-x-4">
              <Battery className="w-12 h-12 text-white/90" />
              <div className="h-8 w-px bg-white/20"></div>
              <p className="text-lg font-medium">Leading Power Backup Distribution Company</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-[#4b1c32] mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize the way people experience power by providing energy-efficient, sustainable, and affordable power backup solutions using cutting-edge inverter and solar technologies.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-[#4b1c32] mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become India's most reliable and customer-focused energy solution provider, empowering every corner of the country with sustainable power systems.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive power solutions tailored to your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#4b1c32] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-r from-[#4b1c32] to-[#67273f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-white/80">{achievement.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <p className="text-sm text-gray-500 mt-4">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Battery className="w-8 h-8 mr-3" />
            <span className="text-xl font-bold">Energy Storage System</span>
          </div>
          <p className="text-slate-400">
            © {new Date().getFullYear()} Energy Storage System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;