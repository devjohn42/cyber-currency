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
      w-[320px] h-[180px]
      sm:w-[380px] sm:h-[200px]
      md:w-[450px] md:h-[240px]
      lg:w-[840px] lg:h-[150px]
      bg-cadet p-2
      flex flex-col items-center justify-center relative z-0 duration-1000 ${cursor}
      before:absolute before:bg-cadet before:-z-10 before:duration-500 before:content-[''] 
      before:h-[180px] before:sm:h-[200px] before:md:h-[240px] before:lg:h-[150px] ${beforeWidth}
      after:absolute after:bg-cadet after:-z-10 after:duration-500 after:content-[''] 
      after:w-[320px] after:sm:w-[380px] after:md:w-[450px] after:lg:w-[840px] ${afterHeight}
      hover:before:w-[0px]
      hover:after:h-[0px]
      ${border} border-turquoise`}
    >
      <div className="w-[95%] flex flex-col gap-y-1 items-start text-left lg:ml-6">
        <h5 className="font-semibold">{title}</h5>
        <p className="w-[85%] text-[12px] sm:text-[14px] md:text-[16px] text-turquoise font-second font-semibold">
          {description}
        </p>
      </div>
      <div className="absolute top-0 w-full h-full text-alice/30 duration-500 hover:text-alice">
        <span className="absolute right-3 bottom-0 text-[2.25rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[4rem] font-second font-semibold sm:font-black ">
          {number}
        </span>
      </div>
    </div>
  );
};

export default BoxMarket;
