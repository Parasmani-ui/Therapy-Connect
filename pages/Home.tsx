import React from 'react';
import { MapPin, ChevronDown, Headphones, Video, Phone, MessageCircle, Home as HomeIcon, Building2, Info, ChevronRight, X } from 'lucide-react';
import VideoSection from '../components/VideoSection';

// Health concerns data with local SVG icons
const healthConcerns = [
  { name: 'Covid', icon: '/covid.svg' },
  { name: 'Immunity', icon: '/immunity.svg' },
  { name: 'Cough / Fever', icon: '/cough.svg' },
  { name: 'Sexual Health', icon: '/sexual.svg' },
  { name: 'Depression', icon: '/depression.svg' },
  { name: 'Sleeplessness', icon: '/sleeplessness.svg' },
  { name: 'Anxiety & hypertension', icon: '/anxiety.svg' },
  { name: 'Stress', icon: '/stress.svg' },
  { name: 'Acidity', icon: '/acidity.svg' },
  { name: 'Hair Fall', icon: '/hairfall.svg' },
  { name: 'Digestion', icon: '/digestion.svg' }, 
  { name: 'Skin Problem', icon: '/skinproblem.svg' },
];

// Therapy concerns data with local SVG icons
const therapyConcerns = [
  { 
    name: 'Ayurved', 
    icon: '/ayurved_green.svg',
    users: 'Users: 1234',
    description: 'A holistic healthcare healing body',
  },
  { 
    name: 'Homeopathy', 
    icon: '/homeopathy_green.svg',
    users: 'Users: 1678',
    description: 'A gentle and enduring care for mind',
  },
  { 
    name: 'Naturopathy', 
    icon: '/naturopathy_green.svg',
    users: 'Users: 1012',
    description: 'All about the healing by nature',
  },
  { 
    name: 'Yoga & Physiotherapy', 
    icon: '/yoga_green.svg',
    users: 'Users: 1456',
    description: 'Modern yet conventional therapy',
  },
  { 
    name: 'Diet & Nutrition', 
    icon: '/Diet_and_Nutrition_green.svg',
    users: 'Users: 789',
    description: 'A science of life, a touch of nature',
  },
];
// Action buttons data
const actionButtons = [
  { title: 'Health Package & Family Doctor', icon: '/Doctor_image.png' },
  { title: 'Book Diagnostics', icon: '/diagnostics.svg' },
  { title: 'Order Medicine', icon: '/medicine.svg' },
  { title: 'Wellness Solutions', icon: '/wellness.svg' },
];

// True Services data
const trueServices = [
  { 
    title: 'Online Consultation', 
    subtitle: 'Video · Audio · Chat',
    image: '/female doctor.jpg'
  },
  { 
    title: 'Offline Consultation', 
    subtitle: 'At Clinic · Home Visit',
    image: '/Doctor_image.png'
  },
  { 
    title: 'Order Medicines', 
    subtitle: 'Delivery at doorstep',
    image: '/medical_store.jpg'
  },
  { 
    title: 'Book Diagnostics', 
    subtitle: 'Laboratory near you',
    image: '/test_tube.jpg'
  },
  { 
    title: 'Health Package', 
    subtitle: 'For you & family',
    image: '/lady.webp'
  },
];

// Articles and News data
const articles = [
  {
    date: '19 June 2022',
    title: 'How to choose the right pediatrician: 8 steps',
    description: 'A step by step guide towards the betterment of health',
    image: '/thumbnail_article1_4433601e429cbb1b6bf4_cf817c13ea-504x419.png',
    isFeatured: false,
  },
  {
    date: '19 June 2022',
    title: 'How your blood type reveals about your health',
    description: 'Red color is not enough for a healthy blood',
    image: '/thumbnail_article2_5922b436c9e1ba08e73c_e098a6f776-504x419.png',
    isFeatured: true,
  },
  {
    date: '19 June 2022',
    title: '5 natural ways to lower surgery chance',
    description: 'Minor changes to your life style to make difference',
    image: '/thumbnail_article3_c49719b5490b5736ee35_c0811f7dfe-504x419.png',
    isFeatured: false,
  },
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
            <div className="relative z-10 flex items-end">
              <img
                src="/Doctor_image.png"
                alt="Therapy Connect hero background"
                className="h-[450px] object-cover rounded-2xl shadow-xl"
              />
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

          
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Know your <span className="text-secondary">Therapy</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              A holistic healthcare experience where you choose what suits you
            </p>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {therapyConcerns.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md transition">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary-light flex items-center justify-center mb-4">
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.users}</p>
                <p className="text-sm text-gray-500 mt-3">{item.description}</p>
                <button className="mt-4 w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto hover:bg-primary transition">
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>

          <p className="text-gray-500 mt-4 text-sm sm:text-base text-center">
            Need our help for choosing the right therapy for you? <span className="text-secondary">Connect to Advisor</span>
          </p>
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

      {/* Offering our true services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Offering our <span className="text-secondary">true services</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-3xl">
              An online healthcare platform offering modern ways of looking at healthcare delivery in combination with traditional therapies
            </p>
            <div className="w-16 h-1 bg-secondary mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {trueServices.map((service, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-3">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-semibold text-sm leading-tight">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-xs text-center">{service.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles and News */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Articles and News on  <br></br><span className="text-secondary">Health & Wellness</span>
            </h2>
            <div className="w-16 h-1 bg-secondary mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <article key={idx} className="group">
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white transition-colors duration-200 group-hover:bg-secondary">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-5 text-gray-700 transition-colors duration-200 group-hover:text-white">
                    <p className="text-xs text-gray-500 transition-colors duration-200 group-hover:text-white/80">{article.date}</p>
                    <h3 className="mt-2 font-semibold text-base leading-snug">{article.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 transition-colors duration-200 group-hover:text-white/90">
                      {article.description}
                    </p>
                    <button className="mt-4 text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-white">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showConsultBadge && (
        <div className="fixed bottom-14 right-6 z-50">
          <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[220px]">
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
            </div>
          </div>
        </div>
      )}

      {/* Password Protected Video Section */}
      <VideoSection />
    </div>
  );
};

export default Home;
