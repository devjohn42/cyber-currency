import React from 'react';
import { motion } from 'framer-motion';
import { aboutAnimations } from '../../../../data/animations';

const BoxSocial = ({
  delay,
  children,
  translate,
  border,
  beforeWidth,
  afterHeight,
}) => {
  return (
    <motion.button
      className={`
      w-[40px] h-[40px]
      sm:w-[50px] sm:h-[50px]
      bg-cadet
      flex items-center justify-center relative z-0 duration-[0.6s]
      before:absolute before:bg-cadet before:-z-10 before:duration-300 before:content-[''] 
      before:h-[40px] before:sm:h-[50px] ${beforeWidth}
      after:absolute after:bg-cadet after:-z-10 after:duration-300 after:content-[''] 
      after:w-[40px] after:sm:w-[50px] ${afterHeight}
      hover:before:w-[0px] hover:before:bg-transparent
      hover:after:h-[0px] hover:after:bg-transparent
      ${translate}
      ${border} border-turquoise`}
      {...aboutAnimations.growUp(delay)}
    >
      {children}
    </motion.button>
  );
};

export default BoxSocial;
