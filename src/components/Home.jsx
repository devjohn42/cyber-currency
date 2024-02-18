import React from 'react';
import Box from './global/Boxes/HomeBox/Box';
import BoxValue from './global/Boxes/HomeBox/BoxValue';

const Home = () => {
  return (
    <section className="home-section">
      <span className="hidden sm:flex title">Cyber Currency Center</span>
      <div className="flex flex-col gap-y-3 md:gap-y-6 items-center">
        <h1>Discover the most famous cyber economy systems</h1>
        <h6 className="w-[80%] md:w-[590px] leading-[120%] text-center">
          Discover the world of Cryptocurrencies, Blockchain and NFTs in this
          application, learn everything about the digital economy.
        </h6>
      </div>
      <div className="flex flex-col gap-y-4 sm:gap-y-6 md:flex-row gap-x-5">
        <Box
          cursor={'cursor-auto'}
          border={'border-[1px] sm:border-[2px]'}
          beforeWidth={'before:w-[70%]'}
          afterHeight={'after:h-[60%]'}
        >
          <BoxValue value={'Cryptocurrency'} />
        </Box>
        <Box
          cursor={'cursor-auto'}
          border={'border-[1px] sm:border-[2px]'}
          beforeWidth={'before:w-[70%]'}
          afterHeight={'after:h-[60%]'}
        >
          <BoxValue value={'Blockchain'} />
        </Box>
        <Box
          cursor={'cursor-auto'}
          border={'border-[1px] sm:border-[2px]'}
          beforeWidth={'before:w-[70%]'}
          afterHeight={'after:h-[60%]'}
        >
          <BoxValue value={'NFT´s'} />
        </Box>
      </div>
    </section>
  );
};

export default Home;
