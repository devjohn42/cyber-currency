import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Header from '../Header';

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
      <section className="w-full mt-24 lg:mt-28 flex flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col items-center justify-center">
          <div className="w-full lg:max-w-[740px] m-[0.5rem] lg:m-[1rem_auto] p-[0.7rem_0.5rem] lg:p-[0.7rem_1rem] flex flex-col bg-cadet shadow-[0px_0px_12px_rgb(24, 25, 27)] rounded-[0.5rem]">
            <span className="text-alice text-center font-first font-bold text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px]">
              {coinInfo.name}
            </span>
          </div>
          <div className="w-full lg:max-w-[740px] m-[0.5rem] lg:m-[1rem_auto] p-[0.7rem_0.5rem] lg:p-[0.7rem_1rem] flex flex-col bg-cadet shadow-[0px_0px_12px_rgb(24, 25, 27)] rounded-[0.5rem]">
            <div className="m-[0.5rem_0rem]">
              <span className="flex items-center w-fit text-alice p-[0.3rem_0.5rem] rounded-[0.5rem] border-[2px] border-solid border-alice bg-raisin shadow-[0px_0px_8px_rgb(24, 25, 27)]">
                Rank # {coinInfo.market_cap_rank}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center m-[1rem_0rem]">
                {coinInfo.image ? (
                  <img src={coinInfo.image.small} alt="" />
                ) : null}
                <p className="pr-[1rem]">{coinInfo.name}</p>
                {coinInfo.symbol ? (
                  <p className="pr-[1rem]">
                    {coinInfo.symbol.toUpperCase()}/USD
                  </p>
                ) : null}
              </div>
              <div className="flex items-center justify-center">
                {coinInfo.market_data?.current_price ? (
                  <h1 className="text-alice text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px]">
                    {coinInfo.market_data.current_price.usd.toLocaleString(
                      'en-US',
                      {
                        style: 'currency',
                        currency: 'USD',
                      }
                    )}
                  </h1>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-[740px] m-[0.5rem] lg:m-[1rem_auto] p-[0.7rem_0.5rem] lg:p-[0.7rem_1rem] flex flex-col bg-cadet shadow-[0px_0px_12px_rgb(24, 25, 27)] rounded-[0.5rem]">
            <table className="m-[0.5rem_0rem]">
              <thead>
                <tr>
                  <th className="p-[5px] lg:p-2 text-center bg-space text-alice">
                    1h
                  </th>
                  <th className="p-[5px] lg:p-2 text-center bg-space text-alice">
                    24h
                  </th>
                  <th className="p-[5px] lg:p-2 text-center bg-space text-alice">
                    7d
                  </th>
                  <th className="p-[5px] lg:p-2 text-center bg-space text-alice">
                    14d
                  </th>
                  <th className="p-[5px] lg:p-2 text-center bg-space text-alice">
                    30d
                  </th>
                  <th className="p-[5px] lg:p-2 text-center bg-space text-alice">
                    1yr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-[5px] lg:p-2 text-center bg-raisin text-alice">
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
                  <td className="p-[5px] lg:p-2 text-center bg-raisin text-alice">
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
                  <td className="p-[5px] lg:p-2 text-center bg-raisin text-alice">
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
                  <td className="p-[5px] lg:p-2 text-center bg-raisin text-alice">
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
                  <td className="p-[5px] lg:p-2 text-center bg-raisin text-alice">
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
                  <td className="p-[5px] lg:p-2 text-center bg-raisin text-alice">
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
          <div className="w-full lg:max-w-[740px] m-[0.5rem] lg:m-[1rem_auto] p-[0.7rem_0.5rem] lg:p-[0.7rem_1rem] flex flex-col bg-cadet shadow-[0px_0px_12px_rgb(24, 25, 27)] rounded-[0.5rem]">
            <div className="w-full grid grid-cols-2 gap-[2rem]">
              <div className="left">
                <div className="flex flex-col items-left md:flex-row md:items-center justify-between border-b-[1px] border-b-solid border-b-[#e3edf7] m-[1rem_0.5rem] pb-[0.5rem]">
                  <h5 className="font-first">24 Hour Low</h5>
                  {coinInfo.market_data?.low_24h ? (
                    <p>
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
                <div className="flex flex-col items-left md:flex-row md:items-center justify-between border-b-[1px] border-b-solid border-b-[#e3edf7] m-[1rem_0.5rem] pb-[0.5rem]">
                  <h5 className="font-first">24 Hour High</h5>
                  {coinInfo.market_data?.high_24h ? (
                    <p>
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
              <div className="right">
                <div className="flex flex-col items-left md:flex-row md:items-center justify-between border-b-[1px] border-b-solid border-b-[#e3edf7] m-[1rem_0.5rem] pb-[0.5rem]">
                  <h5 className="font-first">Market Cap</h5>
                  {coinInfo.market_data?.market_cap ? (
                    <p>
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
                <div className="flex flex-col items-left md:flex-row md:items-center justify-between border-b-[1px] border-b-solid border-b-[#e3edf7] m-[1rem_0.5rem] pb-[0.5rem]">
                  <h5 className="font-first">Circulating Supply</h5>
                  {coinInfo.market_data ? (
                    <p>{coinInfo.market_data.circulating_supply}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-[740px] m-[0.5rem] lg:m-[1rem_auto] p-[0.7rem_0.5rem] lg:p-[0.7rem_1rem] flex flex-col bg-cadet shadow-[0px_0px_12px_rgb(24, 25, 27)] rounded-[0.5rem]">
            <div className="m-[1rem_0rem]">
              <h3 className="m-[1rem_0rem] text-turquoise font-first">About</h3>
              <p
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
    </>
  );
};

export default CoinInfo;
