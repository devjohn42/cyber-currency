import React from 'react';
import BoxSocial from './global/Boxes/AboutBox/BoxSocial';
import BoxCurrencyKnows from './global/Boxes/AboutBox/BoxCurrencyKnows';
import DevLink from './global/DevLink';
import { motion } from 'framer-motion';

import { socialsDATABASE } from '../data/socials';
import { currencyKnowsDATABASE } from '../data/currencyKnows';
import { aboutAnimations } from '../data/animations';

const About = () => {
  const animationContent =
    window.innerWidth < 1024
      ? { ...aboutAnimations.downToUp(0.5, 1) }
      : { ...aboutAnimations.leftToRight };
  const animationKnows =
    window.innerWidth < 1024
      ? { ...aboutAnimations.downToUp(0.5, 1) }
      : { ...aboutAnimations.rightToLeft(0.5, 1) };
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <motion.div
          {...animationContent}
          className="mb-3 flex flex-col gap-y-2"
        >
          <h4 className="text-turquoise font-second leading-[120%]">
            ABOUT US
          </h4>
          <h2 className="leading-[100%]">WHAT WE DO?</h2>

          <h6 className="text-turquoise font-first leading-[120%]">
            We are a group focused on teaching the basics of cyber economy and
            showcasing how vast this universe can be. To get to know us even
            better and stay updated on the digital market, be sure to follow us.
          </h6>
        </motion.div>
        <motion.div
          className="flex gap-x-3 sm:gap-x-5 md:gap-x-7"
          {...animationContent}
        >
          {socialsDATABASE.map((social, index) => {
            return (
              <DevLink key={index}>
                <BoxSocial
                  translate={'hover:md:-translate-y-1'}
                  border={'border-[1px] sm:border-[2px]'}
                  beforeWidth={'before:w-[70%]'}
                  afterHeight={'after:h-[60%]'}
                  delay={index / 25}
                >
                  {social}
                </BoxSocial>
              </DevLink>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col gap-y-4 items-center justify-center"
        {...animationKnows}
      >
        {currencyKnowsDATABASE.map((currencyKnow, index) => {
          return (
            <BoxCurrencyKnows
              key={index}
              cursor={'cursor-auto'}
              border={'border-[1px] sm:border-[2px]'}
              beforeWidth={'before:w-[70%] before:lg:w-[90%]'}
              afterHeight={'after:h-[40%] after:lg:h-[70%]'}
              value={currencyKnow.title}
              description={currencyKnow.description}
              delay={index / 10}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default About;
