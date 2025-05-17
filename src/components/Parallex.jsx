import React from 'react';
import { parallelx, parallelx2 } from '../assets';

const Parallex = () => {
  return (
    <div className="overflow-hidden">
      <section className="parallax-section relative min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: `url(${parallelx})`,
          }}
        />
        <div className="relative z-10 text-center text-white p-12 bg-black/40 backdrop-blur-sm rounded-2xl max-w-4xl mx-6 transform hover:scale-[1.02] transition-transform duration-500">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Power Your World</h2>
          <p className="text-xl md:text-2xl mb-10">Discover our premium range of batteries engineered for reliability and performance</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            Explore Now
          </button>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center transform hover:scale-105 transition-all duration-500">
              <div className="text-6xl font-bold text-blue-600 mb-6">15+</div>
              <p className="text-2xl text-gray-700 font-medium">Years of Excellence</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-500">
              <div className="text-6xl font-bold text-blue-600 mb-6">5000+</div>
              <p className="text-2xl text-gray-700 font-medium">Happy Customers</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-500">
              <div className="text-6xl font-bold text-blue-600 mb-6">24/7</div>
              <p className="text-2xl text-gray-700 font-medium">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-section relative min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: `url(${parallelx2})`,
          }}
        />
        <div className="relative z-10 text-center text-white p-12 bg-black/40 backdrop-blur-sm rounded-2xl max-w-4xl mx-6 transform hover:scale-[1.02] transition-transform duration-500">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Built to Last</h2>
          <p className="text-xl md:text-2xl mb-10">Superior quality batteries with industry-leading warranty and unmatched performance</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Parallex;