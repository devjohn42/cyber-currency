import React from 'react';
import { motion } from 'framer-motion';
import { homeAnimations } from '../../../../data/animations';

const Box = ({ delay, children, cursor, border, beforeWidth, afterHeight }) => {
  return (
    <motion.div
      className={`
      w-[150px] h-[50px] 
      sm:w-[220px] sm:h-[60px]
      md:w-[200px] md:h-[55px]
      lg:w-[250px] lg:h-[60px]
      bg-cadet
      flex items-center justify-center relative z-0 duration-1000 ${cursor}
      before:absolute before:bg-cadet before:-z-10 before:duration-500 before:content-[''] 
      before:h-[50px] before:sm:h-[60px] before:md:h-[55px] before:lg:h-[60px] ${beforeWidth}
      after:absolute after:bg-cadet after:-z-10 after:duration-500 after:content-[''] 
      after:w-[150px] after:sm:w-[220px] after:md:w-[200px] after:lg:w-[250px] ${afterHeight}
      hover:before:w-[0px] hover:before:bg-transparent
      hover:after:h-[0px] hover:after:bg-transparent
      ${border} border-turquoise`}
      {...homeAnimations.downToUp(0.6, delay)}
    >
      {children}
    </motion.div>
  );
};

export default Box;
