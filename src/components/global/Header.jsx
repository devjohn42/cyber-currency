import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa6';
import { MdOutlineApps, MdClose } from 'react-icons/md';

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
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Market</a>
            <a href="">Currency</a>
            <a href="">FAQ</a>
          </nav>
        </div>
        <div className="w-[70px] flex justify-center">
          <FaCoins className="text-turquoise text-[1.8rem] lg:text-[2rem] md:hover:animate-pulse md:cursor-pointer" />
        </div>
      </div>
      <div
        className={
          changeNav
            ? 'w-full flex justify-center md:hidden my-12 transition-max-height ease-in-out duration-700 h-auto'
            : 'h-0 my-0 ease-in-out duration-500'
        }
      >
        <nav
          className={
            changeNav
              ? 'flex flex-col gap-y-5 items-center ease-linear duration-1000'
              : 'h-0 opacity-0'
          }
        >
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Market</a>
          <a href="">Currency</a>
          <a href="">FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
