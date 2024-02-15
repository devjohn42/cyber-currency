import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <section className="min-h-screen flex flex-col gap-y-5 items-center justify-center">
      <div>
        <span className="text-alice text-[80px] sm:text-[120px] md:text-[160px] leading-[100%] font-second font-semibold">
          4
        </span>
        <span className="text-turquoise text-[80px] sm:text-[120px] md:text-[160px] leading-[100%] font-second font-semibold">
          0
        </span>
        <span className="text-alice text-[80px] sm:text-[120px] md:text-[160px] leading-[100%] font-second font-semibold">
          4
        </span>
      </div>
      <span className="text-turquoise text-[24px] sm:text-[48px] lg:text-[80px] font-bold">
        PAGE NOT FOUND
      </span>
      <span className="text-center text-alice w-[90%] md:w-[768px] font-first font-regular text-[16px] sm:text-[20px] leading-[100%]">
        Oops! It seems you've reached a path that is either not created yet or
        doesn't exist. Don't worry, we're here to help. Use one of the links
        below and be redirected to your desired destination.
      </span>
      <div className="flex gap-x-4">
        <div className="bg-cadet border-[2px] rounded-[0.5rem] border-turquoise lg:hover:bg-space duration-500 cursor-pointer p-[0.5rem_1rem]">
          <NavLink className="hover:text-alice" to={'/'}>
            HomePage
          </NavLink>
        </div>
        <div className="bg-cadet border-[2px] rounded-[0.5rem] border-turquoise lg:hover:bg-space duration-500 cursor-pointer p-[0.5rem_1rem]">
          <NavLink className="hover:text-alice" to={'/crypto-stats'}>
            CryptoStats
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
