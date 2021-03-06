import React from "react";
import { Link } from "react-router-dom";
// import s from './CandlesView.module.css';

export const CandlesView = ({ candles }) => {
  return (
    <div>
      <ul>
        {candles.map(candle => (
          <li key={candle.id}>
            <img src={candle.src} alt={candle.id} width={500}/>
            <Link to={`/candles/${candle.id}`}> {candle.text} </Link>
            {candle.availability ? <span>В наявності</span> : <span>Hемає в наявності</span>}
            {console.log(candle.src)}
          </li>
        ))}
      </ul>
    </div>
  )
}