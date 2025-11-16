import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 md:py-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center">
          <Logo className="text-[#005398]" />
        </div>
        <p className="mt-2 text-center text-sm md:text-base text-[#005398]">Australia Young Leaders Academy</p>
        <p className="text-xs text-gray-500 mt-8">
          © {new Date().getFullYear()} AYLA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
