import React from 'react';
import BoxSocial from './Boxes/AboutBox/BoxSocial';
import DevLink from './DevLink';
import {
  FaDiscord,
  FaInstagram,
  FaReddit,
  FaTelegram,
  FaTwitch,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cadet drop-shadow-[0px_1px_4px_rgba(0,0,0,0.5)] md:drop-shadow-[0px_2px_3px_rgba(0,0,0,0.5)] w-full flex flex-col gap-y-8 items-center py-4">
      <div className="flex gap-x-3 sm:gap-x-5 md:gap-x-7">
        <DevLink>
          <BoxSocial
            translate={' '}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[70%]'}
            afterHeight={'after:h-[60%]'}
          >
            <FaDiscord className="text-[1.75rem] text-turquoise" />
          </BoxSocial>
        </DevLink>
        <DevLink>
          <BoxSocial
            translate={' '}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[70%]'}
            afterHeight={'after:h-[60%]'}
          >
            <FaTwitch className="text-[1.75rem] text-turquoise" />
          </BoxSocial>
        </DevLink>
        <DevLink>
          <BoxSocial
            translate={' '}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[70%]'}
            afterHeight={'after:h-[60%]'}
          >
            <FaTelegram className="text-[1.75rem] text-turquoise" />
          </BoxSocial>
        </DevLink>
        <DevLink>
          <BoxSocial
            translate={' '}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[70%]'}
            afterHeight={'after:h-[60%]'}
          >
            <FaReddit className="text-[1.75rem] text-turquoise" />
          </BoxSocial>
        </DevLink>
        <DevLink>
          <BoxSocial
            translate={' '}
            cursor={'cursor-auto'}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[70%]'}
            afterHeight={'after:h-[60%]'}
          >
            <FaInstagram className="text-[1.75rem] text-turquoise" />
          </BoxSocial>
        </DevLink>
        <DevLink>
          <BoxSocial
            translate={' '}
            cursor={'cursor-auto'}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[70%]'}
            afterHeight={'after:h-[60%]'}
          >
            <FaXTwitter className="text-[1.75rem] text-turquoise" />
          </BoxSocial>
        </DevLink>
      </div>
      <div className="w-full flex flex-col gap-y-3 items-center">
        <div className="flex flex-col items-center">
          <h3 className="font-first">Don't miss out!</h3>
          <h6 className="w-[300px] sm:w-[450px] md:w-[650px] text-center font-normal">
            Sign up now for the newsletter to be part of the community and get
            your questions answered
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
        <h6 className="font-first hover:md:text-turquoise duration-500 cursor-pointer font-normal">
          Privacy Policy
        </h6>
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
