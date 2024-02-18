import React from 'react';

const CoinItem = (props) => {
  return (
    <div className="coin-item-content">
      <p className="cs-p">{props.coins.market_cap_rank}</p>
      <div className="flex items-center">
        <img
          src={props.coins.image}
          alt=""
          className="h-[35px] lg:h-10 mr-2 w-auto"
        />
        <p className="cs-p">{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p className="cs-p">
        {props.coins.current_price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
      <p className="cs-p">
        {props.coins.market_cap_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="hidden cs-p lg:flex">
        {props.coins.total_volume.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
      <p className="hidden cs-p lg:flex">
        {props.coins.market_cap.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
    </div>
  );
};

export default CoinItem;
