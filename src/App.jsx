import { Fragment } from 'react';
import Header from './components/global/Header';
import Home from './components/Home';
import About from './components/About';
import Market from './components/Market';
import Currency from './components/Currency';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Market />
      <Currency />
      <Home />
      {/* 
      <h1>Discover the most famous cyber economy systems</h1>
      <h2>Explore the Digital Market</h2>
      <h3>Cryptocurrencies in the Digital Financial Market</h3>
      <h4>Cryptocurrencies</h4>
      <h5>Payment Method and International Fund Transfer</h5>
      <h6>
        Discover the world of Cryptocurrencies, Blockchain and NFTs in this
        application, learn everything about the digital economy.
      </h6>
      <a href="">Home</a>
      <p>
        A cryptocurrency is a form of digital currency that uses cryptography
        for secure transactions, operating on a decentralized network called
        blockchain. Examples include Bitcoin and Ethereum, providing security
        and transparency.
      </p> */}
    </Fragment>
  );
}

export default App;
