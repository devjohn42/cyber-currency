import React from 'react';

const CoinItem = (props) => {
  return (
    <section className="flex items-center justify-between bg-cadet shadow-[0px_0px_12px_rgba(0,0,0,0.8)] rounded-[0.5rem] m-[2rem_1rem] p-[0.7rem_1rem] duration-300 ease-in-out hover:lg:scale-[1.04] hover:lg:cursor-pointer">
      <p>{props.coins.market_cap_rank}</p>
      <div className="flex items-center">
        <img src={props.coins.image} alt="" className='h-[35px] lg:h-10 mr-2 w-auto'/>
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>
        {props.coins.current_price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
      <p>{props.coins.market_cap_change_percentage_24h.toFixed(2)}%</p>
      <p className="hidden lg:flex">
        {props.coins.total_volume.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
      <p className="hidden lg:flex">
        {props.coins.market_cap.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
    </section>
  );
};

export default CoinItem;
