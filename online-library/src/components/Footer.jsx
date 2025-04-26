import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-auto">
      <p className="mb-0">&copy; {new Date().getFullYear()} Online Library. All rights reserved.</p>
    </footer>
  );
};

export default Footer;