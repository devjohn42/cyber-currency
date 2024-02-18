import React from 'react';
import BoxSocial from './global/Boxes/AboutBox/BoxSocial';
import BoxCurrencyKnows from './global/Boxes/AboutBox/BoxCurrencyKnows';
import DevLink from './global/DevLink';

import { socialsDATABASE } from '../data/socials';
import { currencyKnowsDATABASE } from '../data/currencyKnows';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h4 className="text-turquoise font-second leading-[120%]">ABOUT US</h4>
        <h2 className="leading-[100%]">WHAT WE DO?</h2>

        <h6 className="text-turquoise font-first leading-[120%]">
          We are a group focused on teaching the basics of cyber economy and
          showcasing how vast this universe can be. To get to know us even
          better and stay updated on the digital market, be sure to follow us.
        </h6>
        <div className="flex gap-x-3 sm:gap-x-5 md:gap-x-7">
          {socialsDATABASE.map((social, index) => {
            return (
              <DevLink key={index}>
                <BoxSocial
                  translate={'hover:md:-translate-y-1'}
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
      </div>
      <div className="flex flex-col gap-y-4 items-center justify-center ">
        {currencyKnowsDATABASE.map((currencyKnow) => {
          return (
            <BoxCurrencyKnows
              key={currencyKnow.title}
              cursor={'cursor-auto'}
              border={'border-[1px] sm:border-[2px]'}
              beforeWidth={'before:w-[70%] before:lg:w-[90%]'}
              afterHeight={'after:h-[40%] after:lg:h-[70%]'}
              value={currencyKnow.title}
              description={currencyKnow.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default About;
