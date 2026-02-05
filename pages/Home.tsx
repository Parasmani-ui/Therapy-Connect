import React from 'react';
import { MapPin, ChevronDown, Headphones, Video, Phone, MessageCircle, Home as HomeIcon, Building2, Info, ChevronRight, X } from 'lucide-react';
import VideoSection from '../components/VideoSection';

// Health concerns data with local SVG icons
const healthConcerns = [
  { name: 'Covid', icon: '/covid.svg' },
  { name: 'Immunity', icon: '/immunity_fe5ca5b286.svg' },
  { name: 'Cough / Fever', icon: '/cough.svg' },
  { name: 'Sexual Health', icon: '/sexual_5d808a5316.svg' },
  { name: 'Depression', icon: '/depression.svg' },
  { name: 'Sleeplessness', icon: '/sleeplessness_c59f2ffdfd.svg' },
  { name: 'Anxiety & hypertension', icon: '/anxiety.svg' },
  { name: 'Stress', icon: '/stress_3152ebd566.svg' },
  { name: 'Acidity', icon: '/acidity.svg' },
  { name: 'Hair Fall', icon: '/hairfall.svg' },
  { name: 'Digestion', icon: '/digestion.svg' },
  { name: 'Skin Problem', icon: '/skinproblem_7ea2ccb930.svg' },
];

// Action buttons data
const actionButtons = [
  { title: 'Health Package & Family Doctor', icon: '/health_package_family_189411b6f1-670x712.svg' },
  { title: 'Book Diagnostics', icon: '/heart_ab2c729f79.svg' },
  { title: 'Order Medicine', icon: '/homeopathy_504943fbec.svg' },
  { title: 'Wellness Solutions', icon: '/yoga.svg' },
];

const Home: React.FC = () => {
  const [showConsultBadge, setShowConsultBadge] = React.useState(true);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50/50 to-white pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Hero Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Connecting People with <br />
              <span className="text-secondary">Alternative Therapies</span>
            </h1>
            
            <div className="flex gap-3 text-sm font-bold tracking-wide text-primary uppercase">
              <span>Find</span>
              <span className="text-gray-300">|</span>
              <span>Book Appointment</span>
              <span className="text-gray-300">|</span>
              <span>Consult</span>
            </div>

            {/* Search Interface */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xl">
              <div className="grid grid-cols-2 gap-3 mb-3">
                {/* Location Dropdown */}
                <div className="dropdown-select">
                  <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                  <span className="flex-1 text-left">Location</span>
                  <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
                </div>
                
                {/* Therapy Dropdown */}
                <div className="dropdown-select">
                  <span className="text-primary">✦</span>
                  <span className="flex-1 text-left">Therapy</span>
                  <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
                </div>
                
                {/* Consulting Mode Dropdown */}
                <div className="dropdown-select">
                  <Headphones size={16} className="text-gray-400 flex-shrink-0" />
                  <span className="flex-1 text-left">Consulting Mode</span>
                  <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
                </div>
                
                {/* Health Concern Dropdown */}
                <div className="dropdown-select">
                  <span className="text-primary">❋</span>
                  <span className="flex-1 text-left">Health Concern</span>
                  <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
                </div>
              </div>
              
              {/* Find Doctor Button */}
              <button className="w-full btn-primary flex items-center justify-center gap-2">
                Find Doctor
              </button>
            </div>

            {/* Consultation Modes */}
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1">
                <Video size={16} className="text-primary" /> VIDEO
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <Phone size={16} className="text-primary" /> AUDIO
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <MessageCircle size={16} className="text-primary" /> CHAT
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <HomeIcon size={16} className="text-primary" /> HOME VISIT
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <Building2 size={16} className="text-primary" /> AT CLINIC
              </span>
            </div>

            {/* Advisor Link */}
            <a href="#" className="inline-flex items-center text-secondary hover:underline font-semibold group">
              Need help? <span className="text-secondary ml-1 underline">Connect to our Advisor</span>
              <Info size={16} className="ml-1 opacity-70" />
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute top-10 right-10 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
              <div className="absolute top-20 left-10 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
            </div>
            
            {/* Doctor Image */}
            <div className="relative z-10 flex justify-center items-end">
              <img 
                src="/Doctor_image.png" 
                alt="Doctor" 
                className="object-contain max-h-[450px] rounded-2xl"
                onError={(e) => {
                  // Fallback to online image if local not found
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                }}
              />
              
              {/* Floating Consultation Badge */}
              {showConsultBadge && (
                <div className="absolute bottom-16 right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[220px] animate-bounce-slow">
                  <button 
                    onClick={() => setShowConsultBadge(false)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
                  >
                    <X size={14} />
                  </button>
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-sm">FREE Consultation</h4>
                      <p className="text-xs text-gray-500 mt-1">with Therapy Connect doctors</p>
                      <a href="#" className="text-primary text-xs font-bold mt-2 inline-flex items-center gap-1 hover:underline">
                        Read more <ChevronRight size={12} />
                      </a>
                    </div>
                    <img 
                      src="/Doctor_image.png" 
                      alt="Doctor" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80";
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Arrow */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-primary transition border border-gray-100">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-4 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {actionButtons.map((btn, idx) => (
              <button key={idx} className="action-btn group">
                <img 
                  src={btn.icon} 
                  alt={btn.title} 
                  className="w-10 h-10 mb-2 object-contain group-hover:scale-110 transition-transform"
                />
                <span className="leading-tight">{btn.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Health Concerns Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Consult top <span className="text-secondary">Therapists</span> for any health concern
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Private online consultations with verified Doctors in all specialization
            </p>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {healthConcerns.map((item, idx) => (
              <div key={idx} className="health-concern-card">
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <div className="flex gap-1">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              <span className="w-2 h-1 bg-gray-200 rounded-full"></span>
              <span className="w-2 h-1 bg-gray-200 rounded-full"></span>
            </div>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Password Protected Video Section */}
      <VideoSection />
    </div>
  );
};

export default Home;
