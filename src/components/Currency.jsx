import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import { currencyDATABASE } from '../data/currency.js';
import { currencyAnimations } from '../data/animations.js';

const Currency = () => {
  const animationCurrencySlider =
    window.innerWidth < 1024
      ? { ...currencyAnimations.downToUp(0.5, 0.6) }
      : { ...currencyAnimations.leftToRight(0.6) };

  const animationCurrencyBox =
    window.innerWidth < 1024
      ? { ...currencyAnimations.downToUp(0.5, 0.25, 25) }
      : { ...currencyAnimations.leftToRight(0.5) };
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center gap-y-12 py-12"
      id="currency"
    >
      <motion.div
        className="w-full flex flex-col gap-y-2 items-center"
        {...currencyAnimations.show(0.5)}
      >
        <h2 className="text-alice">Digital Financial World</h2>
        <h6 className="text-turquoise w-[80%] sm:w-[90%] lg:w-[750px] text-center">
          Discover the leading markets of Cryptocurrencies, NFTs, and
          Blockchain. Explore innovative opportunities, from efficient financial
          transactions to unique digital art, and immerse yourself in the
          technological revolution of our time.
        </h6>
      </motion.div>
      <div className="w-full flex flex-col gap-y-12 items-center">
        {currencyDATABASE.map((currencySlider, index) => {
          return (
            <motion.div
              key={index}
              className="w-[90%] md:w-[750px] flex flex-col gap-y-7 items-center"
              {...animationCurrencyBox}
            >
              <h3>{currencySlider.currencyTitle}</h3>
              <motion.div
                className="h-[200px] w-full"
                {...animationCurrencySlider}
              >
                <AwesomeSlider
                  className="h-[200px] border-turquoise border-[2px]"
                  bullets={false}
                  mobileTouch={true}
                  organicArrows={false}
                  buttonContentLeft={
                    <MdArrowBackIos className="hidden md:flex text-turquoise text-[2rem]" />
                  }
                  buttonContentRight={
                    <MdArrowForwardIos className="hidden md:flex text-turquoise text-[2rem]" />
                  }
                >
                  {currencySlider.sliders.map((slide, index) => {
                    return (
                      <div
                        key={index}
                        className="h-full w-full bg-cadet flex items-center justify-center "
                      >
                        <div className="md:w-[80%] flex flex-col gap-y-3 md:gap-y-4 items-center">
                          <h5 className="text-center leading-[120%]">
                            {slide.boxTitle}
                          </h5>
                          <p className="text-turquoise text-center w-[90%] font-second font-semibold leading-[120%]">
                            {slide.boxDescription}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </AwesomeSlider>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Currency;
