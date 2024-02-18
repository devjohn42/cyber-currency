import React from 'react';
import { FaCoins } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link
        to={'/crypto-stats'}
        className="flex gap-x-4 items-center justify-center"
      >
        <FaCoins className="crypto-stats-icon" />
        <span className="font-first cs-h1">Crypto Stats</span>
        <FaCoins className="crypto-stats-icon transform scale-x-[-1]" />
      </Link>
    </header>
  );
};

export default Header;
