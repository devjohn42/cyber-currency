import React from 'react';

const DevLink = ({ children }) => {
  return (
    <a
      href="https://station-to.vercel.app/"
      target="_blank"
      className="cursor-pointer"
    >
      {children}
    </a>
  );
};

export default DevLink;
