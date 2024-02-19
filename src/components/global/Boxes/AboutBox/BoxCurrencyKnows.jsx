import React from 'react';
import { motion } from 'framer-motion';
import { aboutAnimations } from '../../../../data/animations';

const BoxCurrencyKnows = ({
  delay,
  value,
  description,
  cursor,
  border,
  beforeWidth,
  afterHeight,
}) => {
  const animation =
    window.innerWidth < 1024
      ? { ...aboutAnimations.downToUp(delay, 0.25) }
      : { ...aboutAnimations.rightToLeft(delay, 0.5) };
  return (
    <motion.div
      className={`
      w-[90%] h-[170px]
      lg:w-[450px]
      bg-cadet
      flex flex-col items-center justify-center relative z-0 duration-1000 ${cursor}
      before:absolute before:bg-cadet before:-z-10 before:duration-500 before:content-[''] 
      before:h-[170px] ${beforeWidth}
      after:absolute after:bg-cadet after:-z-10 after:duration-500 after:content-[''] 
      after:w-[100.5%] after:lg:w-[450px] ${afterHeight}
      hover:before:w-[0px]
      hover:after:h-[0px]
      ${border} border-turquoise`}
      {...animation}
    >
      <div className="w-[95%] flex flex-col gap-y-1 items-start text-left">
        <h4 className="font-second">{value}</h4>
        <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[14px] text-turquoise font-second font-semibold">
          {description}
        </span>
      </div>
    </motion.div>
  );
};

export default BoxCurrencyKnows;
