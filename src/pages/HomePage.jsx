import Header from '../components/global/Header';
import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Market from '../components/Market';
import Currency from '../components/Currency';
import FAQ from '../components/FAQ';
import Footer from '../components/global/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Market />
      <Currency />
      <FAQ />
      <Footer />
    </>
  );
};

export default HomePage;
