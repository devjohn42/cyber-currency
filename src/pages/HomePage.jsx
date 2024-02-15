import Header from '../components/global/Header';
import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Market from '../components/Market';
import Currency from '../components/Currency';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Market />
      <Currency />
      <FAQ />
    </>
  );
};

export default HomePage;
