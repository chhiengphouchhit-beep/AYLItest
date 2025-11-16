import React from 'react';
import Logo from './Logo';

const CoverPage: React.FC = () => {
  return (
    <div className="relative h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/ayla_cover/1920/1080')" }}>
      <div className="absolute inset-0 bg-[#002B49] bg-opacity-60"></div>
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
        <Logo className="text-white" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
          Strategic Plan 2025-2029
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl">
          Empowering Cambodia’s next generation to soar high and shine globally, while staying rooted in their culture, humility, and heart.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default CoverPage;
