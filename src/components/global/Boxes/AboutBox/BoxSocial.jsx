import React from 'react';

const BoxSocial = ({ children, border, beforeWidth, afterHeight }) => {
  return (
    <button
      className={`
      w-[50px] h-[50px]
      bg-cadet
      flex items-center justify-center relative z-0 duration-[0.6s]
      before:absolute before:bg-cadet before:-z-10 before:duration-300 before:content-[''] 
      before:h-[50px] ${beforeWidth}
      after:absolute after:bg-cadet after:-z-10 after:duration-300 after:content-[''] 
      after:w-[50px] ${afterHeight}
      hover:before:w-[0px] hover:before:bg-transparent
      hover:after:h-[0px] hover:after:bg-transparent
      hover:-translate-y-1
      ${border} border-turquoise`}
    >
      {children}
    </button>
  );
};

export default BoxSocial;
