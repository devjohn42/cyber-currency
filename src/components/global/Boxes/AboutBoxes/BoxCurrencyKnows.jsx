import React from 'react';

const BoxCurrencyKnows = ({
  value,
  description,
  cursor,
  border,
  beforeWidth,
  afterHeight,
}) => {
  return (
    <button
      className={`
      w-[90%] h-[170px]
      lg:w-[450px]
      flex flex-col items-center justify-center relative z-0 duration-1000 ${cursor}
      before:absolute before:bg-space before:-z-10 before:duration-500 before:content-[''] 
      before:h-[170px] ${beforeWidth}
      after:absolute after:bg-space after:-z-10 after:duration-500 after:content-[''] 
      after:w-[100.5%] after:lg:w-[450px] ${afterHeight}
      hover:bg-raisin
      hover:before:w-[0px]
      hover:after:h-[0px]
      ${border} border-turquoise`}
    >
      <div className="w-[95%] flex flex-col gap-y-1 items-start text-left">
        <h4 className="font-second">{value}</h4>
        <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[14px] text-turquoise font-second font-semibold">
          {description}
        </span>
      </div>
    </button>
  );
};

export default BoxCurrencyKnows;
