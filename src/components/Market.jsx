import React from 'react';
import BoxMarket from './global/Boxes/MarketBoxe/BoxMarket.jsx';
import { marketDATABASE } from '../data/market.js';

const Market = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-y-16 py-12">
      <div className="w-full flex flex-col gap-y-2 items-center">
        <h2 className="text-alice">Explore the Digital Market</h2>
        <h6 className="text-turquoise w-[80%] sm:w-[90%] lg:w-[750px] text-center">
          Cryptocurrencies for payments, the transparency of Blockchain, and the
          exclusivity of NFTs. A journey of innovation and opportunities awaits
          you.
        </h6>
      </div>
      <div className="w-full flex flex-col gap-y-10">
        {marketDATABASE.map((currencySection, index) => {
          return (
            <div key={index} className=" flex flex-col items-center gap-y-6">
              <h3 className="text-turquoise w-[320px] sm:w-[380px] md:w-[450px] lg:w-[840px] text-center">
                {currencySection.currencyTitle}
              </h3>
              <div className="flex flex-col items-center gap-y-8">
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
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Market;
