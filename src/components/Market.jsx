import React from 'react';
import BoxMarket from './global/Boxes/MarketBoxes/BoxMarket';
import { marketDATABASE } from './data/market';

const Market = () => {
  return (
    <section className="w-full flex flex-col items-center gap-y-20 py-6">
      <div className="w-full flex flex-col gap-y-2 items-center">
        <h2 className="text-alice">Explore the Digital Market</h2>
        <h6 className="text-turquoise w-[80%] sm:w-[90%] lg:w-[750px] text-center">
          Cryptocurrencies for payments, the transparency of Blockchain, and the
          exclusivity of NFTs. A journey of innovation and opportunities awaits
          you.
        </h6>
      </div>
      <div className="w-full flex flex-col gap-y-20">
        {marketDATABASE.map((currencySection) => {
          return (
            <div className="flex flex-col items-center gap-y-12">
              <h3 className="text-turquoise w-[80%] text-center">
                {currencySection.currencyTitle}
              </h3>
              <div className="flex flex-col items-center gap-y-8">
                {currencySection.box.map((box, index) => {
                  return (
                    <BoxMarket
                      title={box.boxTitle}
                      description={box.boxDescription}
                      number={index + 1}
                      cursor={'cursor-auto'}
                      border={'border-[1px] sm:border-[2px]'}
                      beforeWidth={
                        'before:w-[60%] sm:before:w-[75%] md:before:w-[90%]'
                      }
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
