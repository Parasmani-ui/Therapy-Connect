import React from 'react';
import { HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center bg-gray-50">
      <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 max-w-lg w-full">
        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <HardHat size={48} className="text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <h2 className="text-xl font-semibold text-secondary mb-6">🚧 Work in Progress</h2>
        
        <p className="text-gray-500 mb-8">
          We are currently building this section to bring you the best experience. 
          Updates are coming soon!
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PlaceholderPage;