import React from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Battery,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Signup = ({ onSwitchToLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="w-full max-w-lg animate-fadeIn">
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-10 border border-green-100">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Battery className="w-10 h-10 text-green-500" />
              <Zap className="w-8 h-8 text-blue-500 -ml-5 -mt-4" />
            </div>
            <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Power Up Your Account
            </h1>
            <p className="text-gray-600 text-lg">
              Join us for the best battery solutions
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-green-400" />
                </span>
                <input
                  id="name"
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-green-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-200 focus:border-green-400 bg-white transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-green-400" />
                </span>
                <input
                  id="email"
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-green-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-200 focus:border-green-400 bg-white transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-green-400" />
                </span>
                <input
                  id="password"
                  type="password"
                  className="block w-full pl-10 pr-10 py-3 border border-green-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-200 focus:border-green-400 bg-white transition-all"
                  placeholder="password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-400 hover:text-green-600 transition-colors"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-green-400" />
                </span>
                <input
                  id="confirmPassword"
                  type="password"
                  className="block w-full pl-10 pr-10 py-3 border border-green-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-200 focus:border-green-400 bg-white transition-all"
                  placeholder="confirm-password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-400 hover:text-green-600 transition-colors"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input
                id="terms"
                type="checkbox"
                className="h-5 w-5 rounded border-green-300 text-green-600 focus:ring-green-400 mt-0.5"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to receive updates about new products, promotions, and
                battery maintenance tips. View our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-green-600 transform hover:-translate-y-0.5 transition-all flex items-center justify-center text-lg"
            >
              Create Account
              <ArrowRight size={20} className="ml-2" />
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Special Offer
                </span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="text-center text-sm text-blue-800">
                🔋 Sign up now and get 10% off on your first battery purchase!
                <br />
                <span className="font-semibold">
                  Use code: NEWPOWER10 at checkout
                </span>
              </p>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-semibold text-blue-600 hover:underline"
                
              >
                <Link to={'/log-in'}>
                Log in
                </Link>
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;