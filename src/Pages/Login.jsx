import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', { email, password, rememberMe });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6">
      <div className="w-full max-w-4xl flex bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Left Branding Section */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-green-600 to-lime-500 p-8 flex-col justify-center text-white">
          <div className="flex items-center mb-6">
            <BatteryCharging size={32} className="mr-3" />
            <h2 className="text-3xl font-bold">PowerUp Batteries</h2>
          </div>
          <p className="text-lg leading-relaxed">
            High-performance batteries for every need. Sign in to manage your orders, track shipments, and stay charged!
          </p>
          <div className="mt-10 text-sm text-lime-100">© 2025 PowerUp Inc.</div>
        </div>

        {/* Right Login Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back ⚡</h1>
            <p className="text-gray-500 mt-1">Sign in to your PowerUp account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-3 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-green-500`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm text-green-600 hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-green-500`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all flex justify-center items-center"
            >
              {isLoading && (
                <span className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              Sign In
              <ArrowRight className="ml-2" size={18} />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="text-green-600 font-medium hover:underline"
            >
              <Link to={'/sign-up'}>
              Sign up
              </Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
