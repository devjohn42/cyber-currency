import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { motion } from 'framer-motion';
import { faqAnimations } from '../../../../data/animations';

const BoxFAQ = ({
  delay,
  title,
  description,
  cursor,
  border,
  beforeWidth,
  afterHeight,
  isOpen,
  onToggle,
}) => {
  return (
    <motion.div
      className={`
      w-[90%] 
      ${isOpen ? 'h-[180px]' : 'h-[80px]'}
      lg:w-[980px]
      flex flex-col items-center justify-center relative z-0 duration-700 ${cursor}
      before:absolute before:bg-raisin before:-z-10 before:duration-700 before:content-[''] 
      ${
        isOpen
          ? 'before:h-[180px] before:lg:h-[150px]'
          : 'before:h-[80px] before:lg:h-[80px]'
      }
      before:h-[180px] before:lg:h-[150px] ${beforeWidth}
      after:absolute after:bg-raisin after:-z-10 after:duration-700 after:content-[''] 
      ${isOpen ? '' : 'after:w-[100.5%] after:lg:w-[980px]'} ${afterHeight}
      ${isOpen ? 'before:w-[0px] after:h-[0px]' : ''}      
      ${border} border-turquoise`}
      {...faqAnimations.downToUp(delay, 0.5)}
    >
      <div className=" w-[95%] flex flex-col gap-y-1 items-start text-left">
        <h5 className="text-turquoise font-second font-semibold">{title}</h5>
        <p
          className={`h-0 ${
            isOpen
              ? 'h-auto transform-opacity opacity-100 duration-700'
              : 'opacity-0'
          }`}
        >
          {description}
        </p>
      </div>
      <MdKeyboardArrowUp
        className={`text-turquoise text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] absolute top-0 sm:top-2 right-0 sm:right-2 cursor-pointer ${
          isOpen ? 'transform rotate-180 duration-700' : 'duration-700'
        }`}
        onClick={onToggle}
      />
    </motion.div>
  );
};

export default BoxFAQ;
