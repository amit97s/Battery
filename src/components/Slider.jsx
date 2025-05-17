import React, { useState, useEffect } from "react";
import { slider1, slider2, slider3, slider4, slider5 } from "../assets";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 1000, max: 100000 });
  const [isProcessing, setIsProcessing] = useState(false);

  const slides = [slider1, slider2, slider3, slider4, slider5];
  
  const products = ["Inverter", "UPS", "Batteries", "Solar Products", "Stabilizers", "Battery Water"];
  const companies = ["Microtech", "Luminous", "Dynax", "Livfast", "Exide", "Sukam", "Amaron", "MTech", "Okaya"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCompanyToggle = (company) => {
    setSelectedCompanies(prev => 
      prev.includes(company)
        ? prev.filter(c => c !== company)
        : [...prev, company]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedProduct) {
      setStep(2);
    } else if (step === 2 && selectedCompanies.length > 0) {
      setStep(3);
    }
  };

  const handleFindProducts = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="h-[600px] bg-white flex overflow-hidden rounded-xl shadow-lg">
      <div className="w-1/3 px-8 py-5 bg-gradient-to-br from-blue-50 to-white">
        <div className="h-full flex flex-col">
          <div className="flex-grow-0">
            {step === 1 && (
              <div className="space-y-2 animate-fadeIn">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">What are you looking for?</h3>
                <div className="space-y-2">
                  {products.map((product) => (
                    <label
                      key={product}
                      className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedProduct === product
                          ? "bg-blue-50 border-blue-500 border-2"
                          : "border border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="product"
                        value={product}
                        checked={selectedProduct === product}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 transition-all duration-200 ${
                        selectedProduct === product
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`} />
                      <span className="text-gray-700">{product}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Which {selectedProduct} companies interest you?
                </h3>
                <div className="space-y-2 max-h-[350px] overflow-y-auto custom-scrollbar">
                  {companies.map((company) => (
                    <label
                      key={company}
                      className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedCompanies.includes(company)
                          ? "bg-blue-50 border-blue-500 border-2"
                          : "border border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCompanies.includes(company)}
                        onChange={() => handleCompanyToggle(company)}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded border-2 mr-3 transition-all duration-200 ${
                        selectedCompanies.includes(company)
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`} />
                      <span className="text-gray-700">{company}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">What's your budget?</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>₹{priceRange.min.toLocaleString()}</span>
                    <span>₹{priceRange.max.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4">
            {step < 3 && (
              <button
                onClick={handleNext}
                disabled={step === 1 ? !selectedProduct : selectedCompanies.length === 0}
                className={`w-full py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] ${
                  (step === 1 && selectedProduct) || (step === 2 && selectedCompanies.length > 0)
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                onClick={handleFindProducts}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"></span>
                    Processing...
                  </span>
                ) : (
                  "Find Products"
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-2/3 relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;