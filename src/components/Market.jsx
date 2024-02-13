import React from 'react';
import BoxMarket from './global/Boxes/MarketBoxes/BoxMarket';

const Market = () => {
  return (
    <section className="w-full flex flex-col items-center gap-y-20 py-6">
      <div className="w-full flex flex-col gap-y-2 items-center">
        <h3 className="text-alice">Explore the Digital Market</h3>
        <h6 className="text-turquoise w-[80%] sm:w-[90%] lg:w-[750px] text-center">
          Cryptocurrencies for payments, the transparency of Blockchain, and the
          exclusivity of NFTs. A journey of innovation and opportunities awaits
          you.
        </h6>
      </div>
      <div className="flex flex-col items-center gap-y-10">
        <h4 className="text-turquoise w-full text-center">
          Cryptocurrencies in the Digital Financial Market
        </h4>
        <div className="flex flex-col items-center gap-y-7">
          <BoxMarket
            title={'Payment Method and International Fund Transfer'}
            description={
              'Exploration of cryptocurrencies as an efficient means of payment and international fund transfer, emphasizing speed and reduced costs compared to traditional methods.'
            }
            number={'1'}
            cursor={'cursor-auto'}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[60%] md:before:w-[90%]'}
            afterHeight={'after:h-[60%]'}
          />
          <BoxMarket
            title={'Investment and Portfolio Diversification'}
            description={
              'Discussion on how cryptocurrencies offer investment opportunities, enabling investors to diversify their portfolios and participate in the ever-evolving market.'
            }
            number={'2'}
            cursor={'cursor-auto'}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[60%] md:before:w-[90%]'}
            afterHeight={'after:h-[60%]'}
          />
          <BoxMarket
            title={'Development of Decentralized Financial Ecosystems (DeFi)'}
            description={
              'Approach to the role of cryptocurrencies in the growth of DeFi ecosystems, where users can lend, borrow, and trade assets without the need for traditional intermediaries.'
            }
            number={'3'}
            cursor={'cursor-auto'}
            border={'border-[1px] sm:border-[2px]'}
            beforeWidth={'before:w-[60%] md:before:w-[90%]'}
            afterHeight={'after:h-[60%]'}
          />
        </div>
      </div>
    </section>
  );
};

export default Market;
