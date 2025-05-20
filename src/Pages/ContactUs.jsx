import React, { useState, useEffect } from 'react';
import { Battery, Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

function ContactUs() {
  // Form state management
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    subject: '',
    message: '' 
  });
  
  // Form status state
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });
  
  // Focus state for floating labels
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle focus state for floating labels
  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  // Handle blur state for floating labels
  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: formData[field].length > 0 });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form Data:', formData);
      setFormStatus({
        submitted: true,
        submitting: false,
        error: null
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setFocused({
          name: false,
          email: false,
          phone: false,
          subject: false,
          message: false
        });
        setFormStatus({ ...formStatus, submitted: false });
      }, 3000);
    }, 1000);
  };

  // Set initial focus states based on data presence
  useEffect(() => {
    setFocused({
      name: formData.name.length > 0,
      email: formData.email.length > 0,
      phone: formData.phone.length > 0,
      subject: formData.subject.length > 0,
      message: formData.message.length > 0
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left section: Company Information */}
          <div className="col-span-2 bg-gradient-to-br from-[#4b1c32] to-[#67273f] text-white p-8 lg:p-12">
            <div className="h-full flex flex-col">
              {/* Logo and company name */}
              <div className="mb-8 flex items-center">
                <div className="mr-4 bg-white/20 p-3 rounded-xl">
                  <Battery className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Energy Storage System</h1>
                  <p className="text-white/80 mt-1">Power Solutions Specialists</p>
                </div>
              </div>
              
              {/* Company description */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">About Us</h2>
                <p className="text-white/90 leading-relaxed">
                  Energy Storage System is a leading power backup distribution company 
                  specializing in inverter systems, batteries, and solar solutions. 
                  With years of experience, we provide reliable and efficient power 
                  solutions for both residential and commercial sectors.
                </p>
              </div>
              
              {/* Contact information */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start group">
                    <div className="mr-4 bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Our Location</p>
                      <p className="text-white/80 mt-1">A-123, Industrial Area, Delhi, India</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="mr-4 bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone Number</p>
                      <p className="text-white/80 mt-1">+91-9876543210</p>
                      <p className="text-white/80">+91-1234567890 (Support)</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="mr-4 bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email Address</p>
                      <p className="text-white/80 mt-1">contact@energystorage.com</p>
                      <p className="text-white/80">support@energystorage.com</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start group">
                    <div className="mr-4 bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-white/80 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/80">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Social media links */}
              <div className="mt-auto">
                <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right section: Contact Form */}
          <div className="col-span-3 p-8 lg:p-12">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
                <p className="text-gray-600 mt-2">
                  Fill out the form below, and our team will get back to you within 24 hours.
                </p>
              </div>
              
              {formStatus.submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="bg-green-50 rounded-full p-4 mb-6">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 max-w-md">
                    Your message has been successfully sent. We will contact you very soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Name field */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        required
                        className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-[#4b1c32] focus:outline-none"
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-0 -top-3.5 text-gray-600 transition-all 
                          ${focused.name ? '-top-3.5 text-sm' : 'top-3 text-base peer-focus:-top-3.5 peer-focus:text-sm'}`}
                      >
                        Your Name
                      </label>
                    </div>
                    
                    {/* Email field */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        required
                        className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-[#4b1c32] focus:outline-none"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-0 -top-3.5 text-gray-600 transition-all 
                          ${focused.email ? '-top-3.5 text-sm' : 'top-3 text-base peer-focus:-top-3.5 peer-focus:text-sm'}`}
                      >
                        Your Email
                      </label>
                    </div>
                    
                    {/* Phone field */}
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={() => handleBlur('phone')}
                        className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-[#4b1c32] focus:outline-none"
                      />
                      <label
                        htmlFor="phone"
                        className={`absolute left-0 -top-3.5 text-gray-600 transition-all 
                          ${focused.phone ? '-top-3.5 text-sm' : 'top-3 text-base peer-focus:-top-3.5 peer-focus:text-sm'}`}
                      >
                        Phone Number (Optional)
                      </label>
                    </div>
                    
                    {/* Subject field */}
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={() => handleBlur('subject')}
                        required
                        className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-[#4b1c32] focus:outline-none"
                      />
                      <label
                        htmlFor="subject"
                        className={`absolute left-0 -top-3.5 text-gray-600 transition-all 
                          ${focused.subject ? '-top-3.5 text-sm' : 'top-3 text-base peer-focus:-top-3.5 peer-focus:text-sm'}`}
                      >
                        Subject
                      </label>
                    </div>
                  </div>
                  
                  {/* Message field */}
                  <div className="relative mb-8">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      required
                      className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-[#4b1c32] focus:outline-none resize-none"
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-0 -top-3.5 text-gray-600 transition-all 
                        ${focused.message ? '-top-3.5 text-sm' : 'top-3 text-base peer-focus:-top-3.5 peer-focus:text-sm'}`}
                    >
                      Your Message
                    </label>
                  </div>
                  
                  {/* Submit button */}
                  <div className="mt-auto">
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`flex items-center justify-center w-full md:w-auto px-8 py-3 bg-[#4b1c32] hover:bg-[#67273f] text-white font-medium rounded-xl transition-all duration-300 transform hover:translate-y-[-2px] ${formStatus.submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {formStatus.submitting ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      By submitting this form, you agree to our{' '}
                      <a href="#" className="text-[#4b1c32] hover:underline">Privacy Policy</a>
                      {' '}and{' '}
                      <a href="#" className="text-[#4b1c32] hover:underline">Terms of Service</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;