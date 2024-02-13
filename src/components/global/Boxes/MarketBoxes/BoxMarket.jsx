import React from 'react';

const BoxMarket = ({
  title,
  description,
  number,
  cursor,
  border,
  beforeWidth,
  afterHeight,
}) => {
  return (
    <div
      className={`
      w-[90%] h-[270px] 
      sm:h-[140px]
      lg:w-[840px]
      flex flex-col items-center justify-center relative z-0 duration-1000 ${cursor}
      before:absolute before:bg-raisin before:-z-10 before:duration-500 before:content-[''] 
      before:h-[270px] before:sm:h-[140px] ${beforeWidth}
      after:absolute after:bg-raisin after:-z-10 after:duration-500 after:content-[''] 
      after:w-[100.5%] after:lg:w-[840px] ${afterHeight}
      hover:bg-cadet
      hover:before:w-[0px]
      hover:after:h-[0px]
      ${border} border-turquoise`}
    >
      <div className="h-full flex items-center">
        <div className="lg:ml-12">
          <h5 className="font-semibold">{title}</h5>
          <p className="w-[85%] text-[12px] sm:text-[14px] md:text-[16px] text-turquoise font-second font-semibold">
            {description}
          </p>
        </div>
        <div className="absolute top-0 w-full h-full text-alice/30 duration-500 hover:text-alice">
          <span className="absolute right-3 bottom-0 text-[4rem] font-second font-black ">
            {number}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoxMarket;
