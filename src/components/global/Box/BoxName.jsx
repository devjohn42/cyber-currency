import React from 'react';

const BoxName = ({ name }) => {
  return (
    <span className="no-select text-[16px] sm:text-[18px] lg:text-[20px] text-turquoise font-first">
      {name}
    </span>
  );
};

export default BoxName;
