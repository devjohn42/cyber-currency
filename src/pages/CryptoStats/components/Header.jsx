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
        <FaCoins className="text-[1.75rem] text-turquoise" />
        <h2 className="font-first">Crypto Stats</h2>
        <FaCoins className="text-[1.75rem] text-turquoise transform scale-x-[-1]" />
      </Link>
    </header>
  );
};

export default Header;
