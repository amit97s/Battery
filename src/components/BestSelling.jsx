import React from "react";
import {
  carb1,
  carb2,
  carb3,
  carb4,
  inverb1,
  inverb2,
  inverb3,
  inverb4,
} from "../assets";

const BestSelling = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">BEST SELLING CAR BATTERIES</h1>
            <div className="w-32 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img src={carb1} alt="Amaron Battery" className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">Popular</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Amaron AAM-FL-00042B20L | 35AH</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Warranty</h4>
                  <p className="text-sm text-gray-500">72 Months (36 Months Free Of Cost + 36 Months Pro Rata)</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]">View Details</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img src={carb2} alt="Exide Battery" className="w-full h-56 object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Exide FMLO-ML38B20L | 35AH</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Warranty</h4>
                  <p className="text-sm text-gray-500">60 Months (30 Months Free Of Cost + 60 Months Pro Rata)</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]">View Details</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img src={carb3} alt="Amaron Battery" className="w-full h-56 object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Amaron AAM-FL-545106036 | 45AH</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Warranty</h4>
                  <p className="text-sm text-gray-500">60 Months (30 Months Free Of Cost + 60 Months Pro Rata)</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]">View Details</button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img src={carb4} alt="Amaron Battery" className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">Best Value</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Amaron AAM-FL-00042B20L | 35AH</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Warranty</h4>
                  <p className="text-sm text-gray-500">72 Months (36 Months Free Of Cost + 36 Months Pro Rata)</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">BEST INVERTER BATTERIES</h1>
            <div className="w-32 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img src={inverb1} alt="Luminous Battery" className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">Best Seller</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Luminous Red Charge RC 18000ST</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Features</h4>
                  <p className="text-sm text-gray-500">Premium Performance & Long Life</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]">View Details</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img src={inverb2} alt="Luminous Ultra Battery" className="w-full h-56 object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Luminous Ultra Charge UCTT 18066</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Features</h4>
                  <p className="text-sm text-gray-500">Advanced Technology & Reliability</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]">View Details</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img src={inverb3} alt="Amaron Battery" className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">150AH</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Amaron AAM-CR-AR150TT54</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Features</h4>
                  <p className="text-sm text-gray-500">High Capacity & Durability</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]">View Details</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img src={inverb4} alt="Exide Battery" className="w-full h-56 object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">150Ah</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Exide InvaMaster IMST1500</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Features</h4>
                  <p className="text-sm text-gray-500">Superior Performance & Reliability</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;