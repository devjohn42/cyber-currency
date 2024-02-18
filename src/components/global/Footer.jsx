import React from 'react';
import BoxSocial from './Boxes/AboutBox/BoxSocial';
import DevLink from './DevLink';
import { socialsDATABASE } from '../../data/socials';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="flex gap-x-3 sm:gap-x-5 md:gap-x-7">
        {socialsDATABASE.map((social, index) => {
          return (
            <DevLink key={index}>
              <BoxSocial
                translate={''}
                border={'border-[1px] sm:border-[2px]'}
                beforeWidth={'before:w-[70%]'}
                afterHeight={'after:h-[60%]'}
              >
                {social}
              </BoxSocial>
            </DevLink>
          );
        })}
      </div>
      <div className="w-full flex flex-col gap-y-5 items-center">
        <div className="flex flex-col items-center">
          <h3 className="font-first">Don't miss out!</h3>
          <h6 className="w-[300px] sm:w-[450px] md:w-[650px] text-center font-normal">
            Sign up now for the newsletter to be part of the community and get
            your questions answered.
          </h6>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-y-3 items-center justify-center gap-x-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
            className="bg-cadet duration-300 px-4 text-alice border-[2px] focus:bg-raisin focus:rounded-[0.4rem] outline-none border-turquoise w-[80%] h-[40px] sm:w-[300px] sm:h-[45px] md:w-[450px] placeholder:absolute placeholder:left-1 placeholder:text-alice placeholder:font-second placeholder:font-light placeholder:px-4"
          />

          <button className="w-[120px] h-[40px] sm:h-[45px] bg-cadet hover:md:bg-raisin hover:md:rounded-[0.4rem] duration-300 text-[16px] md:text-[18px]  text-alice hover:md:text-turquoise font-semibold border-[2px] border-turquoise">
            Submit
          </button>
        </div>
      </div>
      <div className="w-[90%] h-[1px] m-auto bg-alice my-0 md:my-3"></div>
      <div className="w-full flex flex-col gap-y-3 items-center md:flex-row md:justify-around">
        <DevLink>
          <h6 className="font-first hover:md:text-turquoise duration-500 cursor-pointer font-normal">
            Privacy Policy
          </h6>
        </DevLink>
        <h6 className="font-first font-normal text-center flex flex-col sm:flex-row">
          <span>Cyber Currency Center {year}</span>
          <span className="hidden sm:flex mx-1"> - </span>
          <span>All Rights Reserved</span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
