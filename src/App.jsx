import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className="space-y-20 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Scroll Down</h1>

      <div data-aos="fade-up" className="bg-white p-10 shadow-lg rounded">
        <h2 className="text-2xl font-semibold">Section 1</h2>
        <p>Some content that fades in when scrolling into view.</p>
      </div>

      <div data-aos="fade-left" className="bg-white p-10 shadow-lg rounded">
        <h2 className="text-2xl font-semibold">Section 2</h2>
        <p>This one slides in from the left.</p>
      </div>

      <div data-aos="zoom-in" className="bg-white p-10 shadow-lg rounded">
        <h2 className="text-2xl font-semibold">Section 3</h2>
        <p>This one zooms in.</p>
      </div>
    </div>
  );
}

export default App;
