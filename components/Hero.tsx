
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/leadership_academy/1600/900')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative h-full flex items-end p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto w-full text-white bg-[#005398] bg-opacity-80 p-6 md:p-10">
          <p className="text-lg md:text-xl">Australia Young Leaders Academy (AYLA)</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2">
            Three-Pillar Strategic Plan 2025-2029
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
