import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Header from '../Header';
import Footer from '../Footer';

const CoinInfo = () => {
  const params = useParams();
  const [coinInfo, setCoinInfo] = useState({});

  const coinInfoURL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(coinInfoURL)
      .then((response) => {
        setCoinInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      <section className="w-full mt-24 mb-12 lg:mt-28 flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col items-center justify-center">
          <div className="coin-info-container">
            <span className="cs-h2">{coinInfo.name}</span>
          </div>
          <div className="coin-info-container">
            <div className="m-[0.5rem_0rem]">
              <span className="coin-info-rank">
                Rank # {coinInfo.market_cap_rank}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center m-[1rem_0rem]">
                {coinInfo.image ? (
                  <img
                    className="w-[35px] sm:w-[40px]"
                    src={coinInfo.image.small}
                    alt=""
                  />
                ) : null}
                <span className="cs-h4">{coinInfo.name}</span>
                {coinInfo.symbol ? (
                  <span className="cs-h4">
                    {coinInfo.symbol.toUpperCase()}/USD
                  </span>
                ) : null}
              </div>
              <div className="flex items-center justify-center">
                {coinInfo.market_data?.current_price ? (
                  <span className="cs-h3">
                    {coinInfo.market_data.current_price.usd.toLocaleString(
                      'en-US',
                      {
                        style: 'currency',
                        currency: 'USD',
                      }
                    )}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="coin-info-container">
            <table className="m-[0.5rem_0rem] ">
              <thead>
                <tr>
                  <th className="percentage-container-th">1h</th>
                  <th className="percentage-container-th">24h</th>
                  <th className="percentage-container-th">7d</th>
                  <th className="percentage-container-th">14d</th>
                  <th className="percentage-container-th">30d</th>
                  <th className="percentage-container-th">1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="percentage-container-td">
                    {coinInfo.market_data
                      ?.price_change_percentage_1h_in_currency ? (
                      <p>
                        {coinInfo.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="percentage-container-td">
                    {coinInfo.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {coinInfo.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="percentage-container-td">
                    {coinInfo.market_data
                      ?.price_change_percentage_7d_in_currency ? (
                      <p>
                        {coinInfo.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="percentage-container-td">
                    {coinInfo.market_data
                      ?.price_change_percentage_14d_in_currency ? (
                      <p>
                        {coinInfo.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="percentage-container-td">
                    {coinInfo.market_data
                      ?.price_change_percentage_30d_in_currency ? (
                      <p>
                        {coinInfo.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td className="percentage-container-td">
                    {coinInfo.market_data
                      ?.price_change_percentage_1y_in_currency ? (
                      <p>
                        {coinInfo.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                          1
                        )}
                        %
                      </p>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="coin-info-container">
            <div className="w-full flex flex-col sm:flex-row justify-between gap-[2rem]">
              <div className="w-full sm:w-[50%]">
                <div className="amount-container-content">
                  <span className="cs-h4">24 Hour Low</span>
                  {coinInfo.market_data?.low_24h ? (
                    <p className="cs-p">
                      {coinInfo.market_data.low_24h.usd.toLocaleString(
                        'en-US',
                        {
                          style: 'currency',
                          currency: 'USD',
                        }
                      )}
                    </p>
                  ) : null}
                </div>
                <div className="amount-container-content">
                  <span className="cs-h4">24 Hour High</span>
                  {coinInfo.market_data?.high_24h ? (
                    <p className="cs-p">
                      {coinInfo.market_data.high_24h.usd.toLocaleString(
                        'en-US',
                        {
                          style: 'currency',
                          currency: 'USD',
                        }
                      )}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="w-full sm:w-[50%]">
                <div className="amount-container-content">
                  <span className="cs-h4">Market Cap</span>
                  {coinInfo.market_data?.market_cap ? (
                    <p className="cs-p">
                      {coinInfo.market_data.market_cap.usd.toLocaleString(
                        'en-US',
                        {
                          style: 'currency',
                          currency: 'USD',
                        }
                      )}
                    </p>
                  ) : null}
                </div>
                <div className="amount-container-content">
                  <span className="cs-h4">Circulating Supply</span>
                  {coinInfo.market_data ? (
                    <p className="cs-p">
                      {coinInfo.market_data.circulating_supply}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="coin-info-container">
            <div className="flex flex-col gap-y-2 items-start">
              <span className="cs-h2">About</span>
              <p
                className="cs-p"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coinInfo.description ? coinInfo.description.en : ''
                  ),
                }}
              ></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CoinInfo;
