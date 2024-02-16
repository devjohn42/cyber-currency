import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import CoinItem from './components/Coins/CoinItem';

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
    <div>
      <Header />
      <section className="max-w-[85%] m-auto">
        <div>
          <div className="mt-24 lg:mt-32 ml-4 mr-4 flex items-center justify-between bg-cadet shadow-[0px_0px_12px_rgb(24, 25, 27)] rounded-[0.5rem] p-[0.7rem_1rem] font-bold">
            <p>#</p>
            <p className="ml-[-4rem]">Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className="hidden lg:flex">Volume</p>
            <p className="hidden lg:flex">Mkt Cap</p>
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
    </div>
  );
};

export default CryptoApp;
