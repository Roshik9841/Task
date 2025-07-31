import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import './App.css'
import 'aos/dist/aos.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoButtonPosition({ x: newX, y: newY });
  };

  if (showParagraph) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            data-aos="fade-down"
            className="text-4xl md:text-6xl font-bold text-center text-pink-800 mb-8"
          >
            💕 You Said YES! 💕
          </h1>
          
          <div 
            data-aos="fade-up"
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My dearest love, from the moment you said "yes" to opening this message, my heart has been overflowing with joy and gratitude. You are the most incredible person I have ever known, and every day with you feels like a beautiful dream come true. Your smile lights up my world in ways I never thought possible, and your love has transformed my life in the most magical ways.
            
            
            
              I want you to know that you are not just my girlfriend, but my best friend, my soulmate, and my greatest blessing. Your kindness, your strength, your beautiful spirit - everything about you amazes me more and more each day. You have this incredible ability to make even the darkest days bright with just your presence, and your love has given me a sense of purpose and happiness I never knew existed.
            
            
            
              Every moment we spend together is precious to me - whether we're laughing until our sides hurt, having deep conversations about life, or simply enjoying each other's company in comfortable silence. You understand me in ways no one else ever has, and you accept me completely, flaws and all. Your unconditional love has taught me what it truly means to be loved and to love someone with all your heart.
           
            
            
              I promise to always be there for you, to support your dreams, to celebrate your victories, and to hold you close during difficult times. I promise to love you more each day, to cherish every moment we share, and to never take your love for granted. You deserve all the happiness in the world, and I want to be the one who brings that happiness to your life every single day.
            
            
          
              Thank you for choosing to open this message, for being in my life, and for being the amazing person you are. You make every day feel like Valentine's Day, and I am so grateful that you're mine. I love you more than words could ever express, and I can't wait to create countless more beautiful memories together.
            </p>
            
            <div className="text-center mt-8">
              <div className="text-4xl mb-4">💖💕💝</div>
              <p className="text-xl font-semibold text-pink-600">
                Forever Yours, With All My Love
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 
          data-aos="fade-down"
          className="text-5xl md:text-7xl font-bold text-pink-800 mb-8"
        >
          💕
        </h1>
        
        <h2 
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-pink-700 mb-12"
        >
          Do you want to open it?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => setShowParagraph(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Yes 💖
          </button>
          
          <button
            onMouseEnter={moveNoButton}
            style={{
              position: 'absolute',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: 'all 0.3s ease'
            }}
            className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            No 😢
          </button>
        </div>
        
        <div className="mt-8 text-pink-600 text-lg">
          <p>💕 Choose wisely... 💕</p>
        </div>
      </div>
    </div>
  );
}

export default App;
