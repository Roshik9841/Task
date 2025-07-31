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
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 px-5 py-2 rounded-lg mb-5 cursor-pointer" onClick={()=>setShowParagraph(false)}>Back</button>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Happy National Girlfriend Day to the most wonderful person in my life! 💖 I just want to take a moment to tell you how much you mean to me baby. 
            Since the day you came into my life, everything has felt brighter, happier, and more meaningful. You’ve brought laughter to my dull days and 
            comfort to my difficult ones, and you’ve shown me what true love and companionship really feel like. You’re not just my girlfriend—you’re my
             best friend, my biggest supporter, and the reason my heart feels full every single day. Every moment with you is a memory I treasure, 
             whether we’re laughing until our stomachs hurt, talking about life for hours, or simply enjoying the peace of each other’s company. 
             Your love has changed me in the best ways, teaching me patience, understanding, and how beautiful life can be when shared with someone so amazing.
              Today, on National Girlfriend Day, I want you to know how endlessly grateful I am for you, how deeply I love you, and how excited 
              I am to create countless more memories together. 
            You are my happiness, my sunshine, and my forever. I love you so much 💕
            </p>

            <div className="text-center mt-8">
              <div className="text-4xl mb-4">💖💕💝</div>
              <p className="text-xl font-semibold text-pink-600">
                Forever Yours, With All My Love <br/>
                Roshik
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
