import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral">
      <div className="footer footer-center container mx-auto p-6 text-neutral-content">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
