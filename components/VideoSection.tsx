import React, { useState, useRef } from 'react';
import { Lock, Unlock, AlertCircle, Youtube, ExternalLink } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const CORRECT_PASSWORD = 'demo123';
  const VIDEO_URL = "https://res.cloudinary.com/drakvwxfc/video/upload/v1770277718/TC_site_kyud6z.mp4";
  const POSTER_URL = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError('');
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.log("Autoplay blocked:", e));
        }
      }, 100);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-6 bg-primary rounded-full"></span>
            Exclusive Introduction
          </h3>
          {!isUnlocked && <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-500">LOCKED</span>}
        </div>

        <div className="relative w-full aspect-video bg-gray-900">
          {!isUnlocked ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/95 backdrop-blur-sm p-6 text-center z-10">
              <div className="bg-gray-800 p-4 rounded-full mb-4 shadow-lg border border-gray-700">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Restricted Access</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                This content is password protected. Enter the access code below to watch the introduction video.
              </p>

              <form onSubmit={handleUnlock} className="w-full max-w-sm flex flex-col gap-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                
                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-2 rounded">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  <Unlock size={18} className="group-hover:text-white" />
                  Unlock Video
                </button>
              </form>
            </div>
          ) : (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster={POSTER_URL}
            >
              <source src={VIDEO_URL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* YouTube Link */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-center">
          <a 
            href="https://youtu.be/NGbz73Ocgs4?si=qKaxdjm0smp_DSHN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors font-medium text-sm group"
          >
            <div className="bg-white p-1 rounded-full shadow-sm group-hover:shadow border border-gray-200">
              <Youtube size={20} className="text-red-600" />
            </div>
            <span>Watch on YouTube</span>
            <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
