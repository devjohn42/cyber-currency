import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row gap-y-2 justify-around">
      <Link to={'/'} className="cs-h4 md:hover:text-turquoise duration-500">
        HomePage
      </Link>
      <span className="cs-h4 flex flex-col sm:flex-row items-center">
        <span>Cyber Currency Center {year}</span>
        <span className="hidden sm:flex mx-1"> - </span>
        <span>All Rights Reserved</span>
      </span>
    </footer>
  );
};

export default Footer;
