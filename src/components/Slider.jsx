import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slider1, slider2, slider3, slider4, slider5 } from "../assets";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 1000, max: 100000 });
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample image URLs from Pexels (replace with your actual image URLs)
  const slides = [
    slider1, // Solar panels
   slider2, // Batteries
    slider3, // Power systems
    slider4, // UPS
    slider5, // Electronics
  ];
  
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

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFindProducts = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would handle the product search results display
      alert(`Finding ${selectedProduct} from ${selectedCompanies.join(", ")} between ₹${priceRange.min} - ₹${priceRange.max}`);
    }, 2000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mx-auto max-w-7xl w-full bg-white flex flex-col md:flex-row overflow-hidden rounded-xl shadow-lg">
      {/* Form Section */}
      <div className="w-full md:w-1/3 px-4 sm:px-6 py-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="flex flex-col h-full">
          <div className="flex-grow lg:flex-none">
            {step === 1 && (
              <div className="space-y-3 animate-fadeIn">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">What are you looking for?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {products.map((product) => (
                    <label
                      key={product}
                      className={`flex items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
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
                      <div className={`w-5 h-5 rounded-full border-2 mr-3 transition-all duration-200 ${
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
                <div className="space-y-2 max-h-[350px] overflow-y-auto custom-scrollbar pr-1">
                  {companies.map((company) => (
                    <label
                      key={company}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
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
                      <div className={`w-5 h-5 rounded border-2 mr-3 transition-all duration-200 ${
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
              <div className="space-y-5 animate-fadeIn">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">What's your budget?</h3>
                <div className="space-y-6">
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <label className="text-sm text-gray-600">Minimum Price: ₹{priceRange.min.toLocaleString()}</label>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ 
                          ...prev, 
                          min: Math.min(parseInt(e.target.value), priceRange.max - 1000) 
                        }))}
                        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-gray-600">Maximum Price: ₹{priceRange.max.toLocaleString()}</label>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ 
                          ...prev, 
                          max: Math.max(parseInt(e.target.value), priceRange.min + 1000) 
                        }))}
                        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 font-medium">
                    <span>₹1,000</span>
                    <span>₹100,000</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex space-x-3">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-none px-4 py-3 rounded-lg font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                Back
              </button>
            )}
            
            {step < 3 && (
              <button
                onClick={handleNext}
                disabled={step === 1 ? !selectedProduct : selectedCompanies.length === 0}
                className={`flex-grow py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] ${
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
                className="flex-grow bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200"
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

      {/* Image Slider Section */}
      <div className="w-full md:w-2/3 relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="min-w-full h-96 sm:h-full object-cover"
            />
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-white/50 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-white/50 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;