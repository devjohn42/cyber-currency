import React from 'react';
import BoxMarket from './global/Boxes/MarketBoxe/BoxMarket.jsx';
import { marketDATABASE } from '../data/market.js';
import { motion } from 'framer-motion';
import { marketAnimations } from '../data/animations.js';

const Market = () => {
  const animationMarket =
    window.innerWidth < 1024
      ? { ...marketAnimations.downToUp(0.5, 0.6) }
      : { ...marketAnimations.leftToRight(0.6) };
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center gap-y-12 py-12"
      id="market"
    >
      <motion.div
        className="w-full flex flex-col gap-y-2 items-center"
        {...marketAnimations.show(0.5)}
      >
        <h2 className="w-[90%] text-center text-alice">
          Explore the Digital Market
        </h2>
        <h6 className="text-turquoise w-[80%] sm:w-[90%] lg:w-[750px] text-center">
          Cryptocurrencies for payments, the transparency of Blockchain, and the
          exclusivity of NFTs. A journey of innovation and opportunities awaits
          you.
        </h6>
      </motion.div>
      <div className="w-full flex flex-col gap-y-10">
        {marketDATABASE.map((currencySection, index) => {
          return (
            <div key={index} className=" flex flex-col items-center gap-y-6">
              <motion.h3
                className="text-turquoise w-[320px] sm:w-[380px] md:w-[450px] lg:w-[840px] text-center"
                {...marketAnimations.leftToRight(0.6)}
              >
                {currencySection.currencyTitle}
              </motion.h3>
              <motion.div
                className="flex flex-col items-center gap-y-8"
                {...animationMarket}
              >
                {currencySection.box.map((box, index) => {
                  return (
                    <BoxMarket
                      key={index}
                      title={box.boxTitle}
                      description={box.boxDescription}
                      number={index + 1}
                      cursor={'cursor-auto'}
                      border={'border-[1px] sm:border-[2px]'}
                      beforeWidth={'before:w-[80%] before:lg:w-[90%]'}
                      afterHeight={'after:h-[60%]'}
                      delay={index / 10}
                    />
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Market;
