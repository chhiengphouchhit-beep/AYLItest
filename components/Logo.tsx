import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`font-bold text-4xl md:text-5xl ${className}`}>
      AYLA
    </div>
  );
};

export default Logo;
