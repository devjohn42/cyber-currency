import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-section">
      <div>
        <span className="text-alice error-number">4</span>
        <span className="text-turquoise error-number">0</span>
        <span className="text-alice error-number">4</span>
      </div>
      <span className="text-turquoise text-[24px] sm:text-[48px] lg:text-[80px] font-bold">
        PAGE NOT FOUND
      </span>
      <span className="error-description">
        Oops! It seems you've reached a path that is either not created yet or
        doesn't exist. Don't worry, we're here to help. Use one of the links
        below and be redirected to your desired destination.
      </span>
      <div className="flex gap-x-4">
        <div className="error-nav-button">
          <NavLink className="text-turquoise cs-h4" to={'/'}>
            HomePage
          </NavLink>
        </div>
        <div className="error-nav-button">
          <NavLink className="text-turquoise cs-h4" to={'/crypto-stats'}>
            CryptoStats
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
