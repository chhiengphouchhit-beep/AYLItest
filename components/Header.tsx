import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#mission-vision', label: 'Mission & Vision' },
    { href: '#values', label: 'Values' },
    { href: '#pillars', label: 'Pillars' }
  ];

  const headerClasses = isScrolled || isMenuOpen
    ? 'bg-white text-[#002B49] shadow-lg'
    : 'bg-transparent text-white';

  const logoColor = isScrolled || isMenuOpen ? 'text-[#002B49]' : 'text-white';
  
  const linkColor = isScrolled || isMenuOpen ? 'text-[#002B49]' : 'text-white';
  
  const hamburgerLineColor = isScrolled || isMenuOpen ? 'bg-[#002B49]' : 'bg-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <a href="#" aria-label="Go to top of page">
          <Logo className={logoColor} />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`text-lg font-medium hover:text-[#009FDF] transition-colors duration-300 ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="z-50 p-2 -mr-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 ${hamburgerLineColor} transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
              <span className={`block w-8 h-0.5 ${hamburgerLineColor} transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 ${hamburgerLineColor} transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-[#002B49] hover:text-[#009FDF] transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
    </header>
  );
};

export default Header;