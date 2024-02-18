import React from 'react';

const BoxValue = ({ value }) => {
  return (
    <span className="text-[16px] sm:text-[18px] lg:text-[20px] text-turquoise font-first">
      {value}
    </span>
  );
};

export default BoxValue;
