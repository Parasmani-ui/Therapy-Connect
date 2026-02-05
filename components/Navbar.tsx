import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Ayurved', path: '/ayurved', img: '/ayurved.svg' },
    { name: 'Homeopathy', path: '/homeopathy', img: '/homeopathy.svg' },
    { name: 'Naturopathy', path: '/naturopathy', img: '/naturopathy.svg' },
    { name: 'Yoga & Physiotherapy', path: '/yoga-physiotherapy', img: '/yoga.svg' },
    { name: 'Diet & Nutrition', path: '/diet-nutrition', img: '/Diet_and_Nutrition.svg' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <img src="/TC logo.svg" alt="Therapy Connect" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active text-primary' : 'text-gray-600'}`}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-1">
                  <img src={link.img} alt={link.name} className="w-9 h-9 object-contain" />
                </div>
                <span className="text-xs font-medium whitespace-nowrap">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button className="flex flex-col items-center text-gray-500 hover:text-primary transition px-2">
              <Search size={22} />
              <span className="text-xs mt-1">Search</span>
            </button>
            
            {/* Language */}
            <button className="flex flex-col items-center text-gray-500 hover:text-primary transition px-2">
              <Globe size={22} />
              <span className="text-xs mt-1">English</span>
            </button>
            
            {/* User Profile */}
            <button className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition">
              <User size={22} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-primary bg-orange-50'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <img src={link.img} alt={link.name} className="w-6 h-6" />
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Search & Language */}
            <div className="border-t border-gray-100 mt-2 pt-2 flex items-center gap-4 px-3 py-2">
              <button className="flex items-center gap-2 text-gray-500">
                <Search size={20} />
                <span>Search</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500">
                <Globe size={20} />
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
