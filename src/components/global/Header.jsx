import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa6';
import { MdOutlineApps, MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [changeNav, setChangeNav] = useState(false);
  return (
    <header>
      <div className="w-full flex items-center justify-around">
        <div className="w-[70px] flex justify-center">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-[50px] md:w-[60px] lg:w-[70px]"
          />
        </div>

        <div
          className="flex md:hidden"
          onClick={() => setChangeNav(!changeNav)}
        >
          {changeNav ? (
            <MdClose className="text-[2rem] text-turquoise" />
          ) : (
            <MdOutlineApps className="text-[2rem] text-turquoise" />
          )}
        </div>

        <div className="hidden md:flex">
          <nav className="flex flex-col md:flex-row md:gap-x-5">
            <a className="header-nav-link" href="">
              Home
            </a>
            <a className="header-nav-link" href="">
              About
            </a>
            <a className="header-nav-link" href="">
              Market
            </a>
            <a className="header-nav-link" href="">
              Currency
            </a>
            <a className="header-nav-link" href="">
              FAQ
            </a>
          </nav>
        </div>
        <div className="w-[70px] flex justify-center">
          <NavLink to={'/crypto-stats'}>
            <FaCoins className="crypto-stats-icon md:hover:animate-pulse md:cursor-pointer" />
          </NavLink>
        </div>
      </div>
      <div
        className={`w-full flex justify-center md:hidden ${
          changeNav
            ? 'h-auto my-12 transition-all ease-in-out duration-700'
            : 'h-0 my-0 ease-in-out duration-700'
        }`}
      >
        <nav
          className={`flex flex-col gap-y-5 items-center ${
            changeNav
              ? 'ease-in-out duration-700'
              : 'flex flex-col gap-y-5 items-center h-0 opacity-0'
          }`}
        >
          <a className="header-nav-link" href="">
            Home
          </a>
          <a className="header-nav-link" href="">
            About
          </a>
          <a className="header-nav-link" href="">
            Market
          </a>
          <a className="header-nav-link" href="">
            Currency
          </a>
          <a className="header-nav-link" href="">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
