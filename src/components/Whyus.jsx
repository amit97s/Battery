import React from 'react';

const Whyus = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Energy Storage System?
          </h2>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            We're not just a power backup provider — we're a leading name in energy solutions, trusted by homeowners and businesses alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">🔋</div>
            <h3 className="text-2xl font-bold mb-4">Expertise That Powers Confidence</h3>
            <p className="text-gray-600 text-lg">With years of experience in inverter systems, batteries, and solar solutions, we deliver tailored power backup systems designed for long-term reliability and performance.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">🌞</div>
            <h3 className="text-2xl font-bold mb-4">End-to-End Solar & Backup Solutions</h3>
            <p className="text-gray-600 text-lg">Whether it's a smart solar panel setup for your home or a robust commercial backup system, we provide fully integrated solutions that combine efficiency with sustainability.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">🏡</div>
            <h3 className="text-2xl font-bold mb-4">Residential & Commercial Focus</h3>
            <p className="text-gray-600 text-lg">From compact homes to large-scale facilities, we specialize in designing and delivering power systems that meet real-world needs across all scales.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold mb-4">Top-Tier Products. Trusted Brands.</h3>
            <p className="text-gray-600 text-lg">We partner with industry-leading manufacturers to ensure every inverter, battery, and panel we install is durable, high-performing, and backed by warranty.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">🛠️</div>
            <h3 className="text-2xl font-bold mb-4">Seamless Installation & Support</h3>
            <p className="text-gray-600 text-lg">Our expert technicians ensure hassle-free setup and our dedicated support team is always just a call away for maintenance and service.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="text-5xl mb-6">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Energy-Efficient & Future-Ready</h3>
            <p className="text-gray-600 text-lg">We help you save energy, reduce electricity bills, and move toward a greener future with smart backup and solar technology.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Additional Benefits</h3>
          <ul className="space-y-6">
            {[
              'Free Shipping',
              'Free Installation',
              'Best Prices',
              'Cash on Delivery',
              'Pay Online'
            ].map((benefit, index) => (
              <li 
                key={index}
                className="group relative p-6 rounded-xl transition-all duration-300 cursor-pointer bg-white hover:shadow-xl transform hover:-translate-x-2"
              >
                <span className="relative z-10 flex items-center text-xl font-medium text-gray-900">
                  • {benefit}
                </span>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500 ease-out rounded-full"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Whyus;