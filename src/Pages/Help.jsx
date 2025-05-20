import React, { useState } from 'react';
import { Battery, Phone, Mail, Clock, ChevronDown, Search, MessageSquare, Zap, PenTool as Tool, Package, HelpCircle, ExternalLink, CheckCircle } from 'lucide-react';

function Help() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "Products",
      question: "What types of inverter systems do you offer?",
      answer: "We offer a comprehensive range of inverter systems including:\n• Pure Sine Wave Inverters (800VA - 5kVA)\n• Solar Hybrid Inverters\n• Grid-Tie Inverters\n• Industrial UPS Systems\nAll our systems come with advanced features like LCD display, intelligent charging, and overload protection."
    },
    {
      category: "Battery",
      question: "How long do your batteries last?",
      answer: "Our batteries are designed for longevity and reliability:\n• Tubular Batteries: 5-7 years\n• Lithium-ion Batteries: 8-10 years\n• SMF Batteries: 3-5 years\nActual lifespan depends on usage patterns, maintenance, and environmental conditions."
    },
    {
      category: "Services",
      question: "Do you offer installation services?",
      answer: "Yes, we provide comprehensive installation services:\n• Professional installation by certified technicians\n• Site assessment and system design\n• Complete setup and testing\n• User training and documentation\n• 90-day installation warranty"
    },
    {
      category: "Orders",
      question: "Can I track my order?",
      answer: "Yes, we provide real-time order tracking:\n• Track via our mobile app\n• SMS and email updates\n• Live installation tracking\n• Dedicated support executive\nYou'll receive tracking details immediately after order confirmation."
    },
    {
      category: "Support",
      question: "What does your warranty cover?",
      answer: "Our warranty coverage includes:\n• Manufacturing defects\n• Performance issues\n• Parts replacement\n• Labor costs for repairs\nStandard warranty periods vary by product (1-5 years) with extended warranty options available."
    },
    {
      category: "Maintenance",
      question: "How often should I service my inverter?",
      answer: "We recommend:\n• Quarterly basic maintenance\n• Annual comprehensive service\n• Monthly battery water level check\n• Bi-annual efficiency testing\nOur AMC plans cover all these requirements systematically."
    }
  ];

  const quickLinks = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Track Order",
      description: "Check your order status",
      link: "#"
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Service Request",
      description: "Schedule maintenance",
      link: "#"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with support",
      link: "#"
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Browse articles",
      link: "#"
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4b1c32] to-[#67273f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center mb-6">
                <Battery className="w-10 h-10 mr-4" />
                <h1 className="text-4xl font-bold">Help & Support</h1>
              </div>
              <p className="text-xl text-white/90">
                Get instant answers to your questions about our products and services.
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-white/90">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Expert Help</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4b1c32] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-[#4b1c32]/10 text-[#4b1c32] group-hover:bg-[#4b1c32] group-hover:text-white transition-all duration-300">
                  {link.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#4b1c32] transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{link.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 ml-auto text-gray-400 group-hover:text-[#4b1c32] transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Support Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div>
                        <span className="text-sm font-medium text-[#4b1c32] bg-[#4b1c32]/10 px-3 py-1 rounded-full">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-medium text-gray-900 mt-2">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          openIndex === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:border-l lg:pl-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#4b1c32]/10 text-[#4b1c32]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600 mt-1">+91-9876543210</p>
                    <p className="text-gray-600">+91-1234567890 (Support)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#4b1c32]/10 text-[#4b1c32]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600 mt-1">support@energystorage.com</p>
                    <p className="text-gray-600">contact@energystorage.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-[#4b1c32]/10 text-[#4b1c32]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#4b1c32]/5 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Support</h3>
                <p className="text-gray-600 mb-4">
                  For urgent technical assistance or emergency support, please call our 24/7 helpline.
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#4b1c32] text-white font-medium rounded-lg hover:bg-[#67273f] transition-colors duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Call Emergency Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Battery className="w-8 h-8 text-[#4b1c32] mr-3" />
              <span className="text-xl font-bold text-gray-900">Energy Storage System</span>
            </div>
            <p className="text-gray-600">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;