import React, { useState } from 'react';

// import suVastika from '../assets/suvastik.png';
import luminous from '../assets/lumious.png';
import microtech from '../assets/microtech.png';
import exide from '../assets/excide.jpeg';
import cell from '../assets/cell.png';
import sf from '../assets/sf.png';
import amaron from '../assets/amaron.png';
import dynex from '../assets/dynex.jpeg';
import livfast from '../assets/livfast.png';
import apc from '../assets/apc.png';
import usha from '../assets/usha.png';
import waree from '../assets/waree.jpeg';
import vikram from '../assets/vikram.png';
import adani from '../assets/adani.jpeg';

const ShopBy = () => {
  const [showAll, setShowAll] = useState(false);

  const manufacturers = [
    // { name: 'Su-vastika', logo: suvastika },
    { name: 'Luminous', logo: luminous },
    { name: 'Microtek', logo: microtech },
    { name: 'Exide', logo: exide },
    { name: 'Bi-Cell', logo: cell },
    { name: 'SF', logo: sf },
    { name: 'Amaron', logo: amaron },
    { name: 'Dynex', logo: dynex },
    { name: 'Livfast', logo: livfast },
    { name: 'APC', logo: apc },
    { name: 'Usha Shriram', logo: usha },
    { name: 'Warree', logo: waree },
    { name: 'Vikram', logo: vikram },
    { name: 'Aadani', logo: adani }
  ];

  const displayedManufacturers = showAll ? manufacturers : manufacturers.slice(0, 6);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white py-24'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Inverter Battery
          </h2>
          <div className='w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full'></div>
          <h3 className='text-2xl text-gray-700 font-medium'>Shop By Manufacturer</h3>
        </div>
        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto'>
          {displayedManufacturers.map((manufacturer, index) => (
            <div
              key={index}
              className='group relative h-52 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2'
            >
              <div 
                className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                style={{ 
                  backgroundImage: `url(${manufacturer.logo})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: 'white'
                }}
              />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60 group-hover:opacity-40 transition-opacity duration-500' />
              <div className='absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500'>
                <div className='bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg'>
                  <h3 className='font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300'>
                    {manufacturer.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {manufacturers.length > 6 && (
          <div className='text-center mt-16'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='inline-flex items-center px-10 py-4 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
              <svg
                className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopBy;