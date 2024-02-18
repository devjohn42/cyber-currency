import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import CoinItem from './components/Coins/CoinItem';
import Footer from './components/Footer';

const CryptoApp = () => {
  const [cryptos, setCryptos] = useState([]);
  const cryptoURL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  // axios.defaults.headers.post['Content-Type'] =
  //   'application/json;charset=utf-8';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  useEffect(() => {
    axios
      .get(cryptoURL)
      .then((response) => {
        setCryptos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-24 lg:mt-32 max-w-[85%] m-auto">
        <div>
          <div className="ml-4 mr-4 coin-item-content pointer-events-none">
            <p className="cs-p">#</p>
            <p className="ml-[-4rem] cs-p">Coin</p>
            <p className="cs-p">Price</p>
            <p className="cs-p">24h</p>
            <p className="hidden cs-p lg:flex">Volume</p>
            <p className="hidden cs-p lg:flex">Mkt Cap</p>
          </div>
          {cryptos.map((coin) => {
            return (
              <Link to={`/crypto-stats/${coin.id}`} key={coin.id}>
                <CoinItem coins={coin} />
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CryptoApp;
