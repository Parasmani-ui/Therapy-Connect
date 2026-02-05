import React from 'react';
import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/TC logo.svg" alt="Therapy Connect" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm">
              Connecting people with alternative therapies. Find and book appointments with top therapists.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Therapies</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/ayurved" className="hover:text-primary transition">Ayurved</Link></li>
              <li><Link to="/homeopathy" className="hover:text-primary transition">Homeopathy</Link></li>
              <li><Link to="/naturopathy" className="hover:text-primary transition">Naturopathy</Link></li>
              <li><Link to="/yoga-physiotherapy" className="hover:text-primary transition">Yoga & Physiotherapy</Link></li>
              <li><Link to="/diet-nutrition" className="hover:text-primary transition">Diet & Nutrition</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition">Video Consultation</a></li>
              <li><a href="#" className="hover:text-primary transition">Audio Consultation</a></li>
              <li><a href="#" className="hover:text-primary transition">Chat Consultation</a></li>
              <li><a href="#" className="hover:text-primary transition">Home Visit</a></li>
              <li><a href="#" className="hover:text-primary transition">At Clinic</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>+91 9716953125</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>support@therapyconnect.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Therapy Connect. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-primary transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ayurved" element={<PlaceholderPage title="Ayurved" />} />
            <Route path="/homeopathy" element={<PlaceholderPage title="Homeopathy" />} />
            <Route path="/naturopathy" element={<PlaceholderPage title="Naturopathy" />} />
            <Route path="/yoga-physiotherapy" element={<PlaceholderPage title="Yoga & Physiotherapy" />} />
            <Route path="/diet-nutrition" element={<PlaceholderPage title="Diet & Nutrition" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
