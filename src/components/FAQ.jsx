import React, { useState } from 'react';
import BoxFAQ from './global/Boxes/FAQBox/BoxFAQ';
import { faqDATABASE } from '../data/faq';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="w-full min-h-screen py-12 flex flex-col gap-y-10 items-center">
      <div className="w-[90%] lg:w-[980px] flex flex-col items-start gap-y-3">
        <h4 className="text-turquoise font-second leading-[120%]">FAQ</h4>
        <h2 className="leading-[100%]">LOOKING FOR ANSWERS?</h2>
        <h6 className="text-turquoise text-justify font-first leading-[120%]">
          Explore our comprehensive FAQ for clear answers about
          cryptocurrencies, blockchain, and NFTs. We simplify concepts,
          providing essential information to guide you in the dynamic universe
          of the digital financial world.
        </h6>
      </div>
      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        {faqDATABASE.map((box, index) => {
          return (
            <BoxFAQ
              key={index}
              cursor={'cursor-auto'}
              border={'border-[1px] sm:border-[2px]'}
              beforeWidth={'before:w-[70%] before:lg:w-[90%]'}
              afterHeight={'after:h-[50%] after:lg:h-[70%]'}
              title={box.title}
              description={box.description}
              isOpen={openIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
