import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <p className="text-gray-400 text-lg mb-6">Sign up for our newsletter - get updates, offers & expert tips</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-gray-800 border-b-2 border-gray-700 py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors rounded-xl"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div>
            <h3 className="text-xl font-bold mb-6">Delhi NCR</h3>
            <p className="text-gray-400 text-lg">
              123 Energy Street<br />
              New Delhi, 110001
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Mumbai</h3>
            <p className="text-gray-400 text-lg">
              456 Power Avenue<br />
              Mumbai, 400001
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Bangalore</h3>
            <p className="text-gray-400 text-lg">
              789 Battery Road<br />
              Bangalore, 560001
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-lg">About</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition-colors text-lg">Catalog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-lg">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-lg">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-800 pt-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">Energy Storage System</h2>
          </div>
          <div className="flex gap-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">LinkedIn</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">Twitter</a>
          </div>
        </div>

        <div className="mt-12 text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Energy Storage System. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;