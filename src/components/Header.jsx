import { useState } from "react";
import { LogIn, UserPlus, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="flex items-center justify-end bg-blue-600 py-2 px-4 sm:px-6 lg:px-8 gap-2 sm:gap-3">
        <Link to={'/log-in'}>
        <button className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition-all duration-300 shadow-sm rounded-md">
          <LogIn size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          <span>Login</span>
        </button>
        </Link>
        <button className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-white text-gray-800 text-sm font-medium hover:bg-gray-100 transition-all duration-300 shadow-sm rounded-md">
          <UserPlus size={16} />
          <span>Register</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-all duration-300 shadow-sm rounded-md">
          <ShoppingCart size={16} className="transition-transform duration-300 hover:scale-110" />
          <span>Cart</span>
        </button>
      </div>
      <header className="shadow-md bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden h-20">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to={'/'}>
              <img 
                src={logo} 
                alt="Logo" 
                className="h-24 object-contain transition-all duration-300 hover:opacity-90" 
              />
              </Link>
            </div>
            <div className="flex md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-14 text-gray-700 font-medium">
                <Link to={'/'} className="hover:text-blue-600 transition-colors duration-300 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Home</Link>
                <Link to={'/about'} className="hover:text-blue-600 transition-colors duration-300 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">About Us</Link>
                <Link to={'/contact-us'} className="hover:text-blue-600 transition-colors duration-300 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Contact Us</Link>
                <Link to={''} className="hover:text-blue-600 transition-colors duration-300 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Coming Soon</Link>
                <Link to={'/help'} className="hover:text-blue-600 transition-colors duration-300 cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Help</Link>
              </ul>
            </nav>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300">About Us</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300">Contact Us</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300">Coming Soon</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300">Help</a>
            </div>
          </div>
        )}
      </header>
      <div className="bg-gray-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="hidden md:block">
            <ul className="flex justify-center gap-20 text-gray-800 font-medium">
              <li className="group relative cursor-pointer py-2">
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                  <span>Inverter</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 px-4 w-56 z-10 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Inverter Home</li>
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Commercial Inverter</li>
                </ul>
              </li>
              <li className="group relative cursor-pointer py-2">
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                  <span>UPS</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 px-4 w-56 z-10 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">On-line UPS</li>
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Off-line UPS</li>
                </ul>
              </li>
              <li className="group relative cursor-pointer py-2">
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                  <span>Batteries</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 px-4 w-56 z-10 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Lithium Batteries</li>
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Lead Acid Batteries</li>
                </ul>
              </li>
              <li className="group relative cursor-pointer py-2">
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                  <span>Solar Products</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 px-4 w-60 z-10 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Solar Inverter</li>
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Solar Panels</li>
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Solar Accessories</li>
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">All Solar Products</li>
                </ul>
              </li>
              <li className="group relative cursor-pointer py-2">
                <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                  <span>Stabilizer</span>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-2 px-4 w-56 z-10 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Stabilizer</li>
                  <li className="hover:text-blue-600 py-2 px-2 hover:bg-gray-50 rounded transition-colors duration-200">Servo Stabilizer</li>
                </ul>
              </li>
              <li className="cursor-pointer py-2 hover:text-blue-600 transition-colors duration-300">Battery Water</li>
            </ul>
          </div>
          <div className="md:hidden">
            {isMenuOpen && (
              <div className="pt-2 pb-4 space-y-1">
                <DropdownItem title="Inverter" items={["Inverter Home", "Commercial Inverter"]} />
                <DropdownItem title="UPS" items={["On-line UPS", "Off-line UPS"]} />
                <DropdownItem title="Batteries" items={["Lithium Batteries", "Lead Acid Batteries"]} />
                <DropdownItem title="Solar Products" items={["Solar Inverter", "Solar Panels", "Solar Accessories", "All Solar Products"]} />
                <DropdownItem title="Stabilizer" items={["Stabilizer", "Servo Stabilizer"]} />
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300">Battery Water</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const DropdownItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
      >
        <span>{title}</span>
        <ChevronDown 
          size={16} 
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="pl-4 pb-1">
          {items.map((item, index) => (
            <a 
              key={index}
              href="#" 
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;