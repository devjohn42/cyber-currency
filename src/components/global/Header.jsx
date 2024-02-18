import React, { useEffect, useState } from 'react';
import { FaCoins } from 'react-icons/fa6';
import { MdOutlineApps, MdClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header = () => {
  const [changeNav, setChangeNav] = useState(false);
  const handleCloseNav = () => {
    setChangeNav(false);
  };

  const watchingResize = () => {
    if (window.innerWidth >= 1024) {
      setNavOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', watchingResize);
    // console.log(window.innerWidth)
  }, []);
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
            <Link
              className="header-nav-link"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              delay={200}
              isDynamic={true}
            >
              Home
            </Link>
            <Link
              className="header-nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={1000}
              delay={200}
              isDynamic={true}
            >
              About
            </Link>
            <Link
              className="header-nav-link"
              to="market"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
              delay={200}
              isDynamic={true}
            >
              Market
            </Link>
            <Link
              className="header-nav-link"
              to="currency"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
              delay={200}
              isDynamic={true}
            >
              Currency
            </Link>
            <Link
              className="header-nav-link"
              to="faq"
              spy={true}
              smooth={true}
              offset={-90}
              duration={1000}
              delay={200}
              isDynamic={true}
            >
              FAQ
            </Link>
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
          <Link
            className="header-nav-link"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={200}
            isDynamic={true}
            onClick={handleCloseNav}
          >
            Home
          </Link>
          <Link
            className="header-nav-link"
            to="about"
            spy={true}
            smooth={true}
            offset={
              window.innerWidth >= 768 || window.innerWidth >= 480 ? -30 : -90
            }
            duration={1000}
            delay={200}
            isDynamic={true}
            onClick={handleCloseNav}
          >
            About
          </Link>
          <Link
            className="header-nav-link"
            to="market"
            spy={true}
            smooth={true}
            offset={-45}
            duration={1000}
            delay={200}
            isDynamic={true}
            onClick={handleCloseNav}
          >
            Market
          </Link>
          <Link
            className="header-nav-link"
            to="currency"
            spy={true}
            smooth={true}
            offset={
              window.innerWidth >= 768 || window.innerWidth >= 480 ? -60 : -45
            }
            duration={1000}
            delay={200}
            isDynamic={true}
            onClick={handleCloseNav}
          >
            Currency
          </Link>
          <Link
            className="header-nav-link"
            to="faq"
            spy={true}
            smooth={true}
            offset={
              window.innerWidth >= 768 || window.innerWidth >= 480 ? -80 : -60
            }
            duration={1000}
            delay={200}
            isDynamic={true}
            onClick={handleCloseNav}
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
