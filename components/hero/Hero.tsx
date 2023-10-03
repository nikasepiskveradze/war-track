import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen object-contain"
      style={{ backgroundImage: 'url(hero.jpeg)' }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">War Track</h1>
          <p className="mb-5">
            {`Elevate your awareness with real-time updates on the latest data
            surrounding the losses incurred in Ukraine's ongoing conflict.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
