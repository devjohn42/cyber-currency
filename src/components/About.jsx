import React from 'react';
import BoxSocial from './global/Boxes/AboutBox/BoxSocial';
import BoxCurrencyKnows from './global/Boxes/AboutBox/BoxCurrencyKnows';
import DevLink from './global/DevLink';
import {
  FaDiscord,
  FaInstagram,
  FaTelegram,
  FaTwitch,
  FaXTwitter,
} from 'react-icons/fa6';

const About = () => {
  return (
    <section className="w-full bg-space py-12 flex flex-col gap-y-10 items-center justify-center lg:flex-row lg:justify-around">
      <div className="w-[90%] lg:w-[530px] text-justify flex flex-col items-start gap-y-3 md:gap-y-5">
        <h4 className="text-turquoise font-second leading-[120%]">ABOUT US</h4>
        <h2 className="leading-[100%]">WHAT WE DO?</h2>

        <h6 className="text-turquoise font-first leading-[120%]">
          We are a group focused on teaching the basics of cyber economy and
          showcasing how vast this universe can be. To get to know us even
          better and stay updated on the digital market, be sure to follow us.
        </h6>
        <div className="flex gap-x-3 sm:gap-x-5 md:gap-x-7">
          <DevLink>
            <BoxSocial
              border={'border-[1px] sm:border-[2px]'}
              beforeWidth={'before:w-[70%]'}
              afterHeight={'after:h-[60%]'}
            >
              <FaDiscord className="text-[1.75rem] text-turquoise" />
            </BoxSocial>
          </DevLink>
          <DevLink>
            <BoxSocial
              border={'border-[1px] sm:border-[2px]'}
              beforeWidth={'before:w-[70%]'}
              afterHeight={'after:h-[60%]'}
            >
              <FaTwitch className="text-[1.75rem] text-turquoise" />
            </BoxSocial>
          </DevLink>
          <DevLink>
            <BoxSocial
              border={'border-[1px] sm:border-[2px]'}
              beforeWidth={'before:w-[70%]'}
              afterHeight={'after:h-[60%]'}
            >
              <FaTelegram className="text-[1.75rem] text-turquoise" />
            </BoxSocial>
          </DevLink>
          <DevLink>
            <BoxSocial
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
              cursor={'cursor-auto'}
              border={'border-[1px] sm:border-[2px]'}
              beforeWidth={'before:w-[70%]'}
              afterHeight={'after:h-[60%]'}
            >
              <FaXTwitter className="text-[1.75rem] text-turquoise" />
            </BoxSocial>
          </DevLink>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 items-center justify-center ">
        <BoxCurrencyKnows
          cursor={'cursor-auto'}
          border={'border-[1px] sm:border-[2px]'}
          beforeWidth={'before:w-[70%] before:lg:w-[90%]'}
          afterHeight={'after:h-[40%] after:lg:h-[70%]'}
          value={'Cryptocurrencies'}
          description={
            'A cryptocurrency is a form of digital currency that uses cryptography for secure transactions, operating on a decentralized network called blockchain. Examples include Bitcoin and Ethereum, providing security and transparency.'
          }
        />
        <BoxCurrencyKnows
          cursor={'cursor-auto'}
          border={'border-[1px] sm:border-[2px]'}
          beforeWidth={'before:w-[70%] before:lg:w-[90%]'}
          afterHeight={'after:h-[40%] after:lg:h-[70%]'}
          value={'Blockchain'}
          description={
            'Blockchain is decentralized, using encrypted, linked records for secure and transparent transactions. Widely used in cryptocurrencies and applications like supply chains and smart contracts, it forms an immutable chain of blocks.'
          }
        />
        <BoxCurrencyKnows
          cursor={'cursor-auto'}
          border={'border-[1px] sm:border-[2px]'}
          beforeWidth={'before:w-[70%] before:lg:w-[90%]'}
          afterHeight={'after:h-[40%] after:lg:h-[70%]'}
          value={'NFTs (Non-Fungible Tokens)'}
          description={
            'NFTs, or Non-Fungible Tokens, are unique digital assets on the blockchain, such as art and music, ensuring authenticity and ownership. Managed by smart contracts, they provide transparency and traceability.'
          }
        />
      </div>
    </section>
  );
};

export default About;
