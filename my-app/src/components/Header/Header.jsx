import { Link } from "react-router-dom";
import React from "react";
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.header}>
      <header >
      <span className={s.slogan}>POTIONS & FLAMES STORE</span>
      <svg className={s.logo} width={20} height={25}>
        <use herf='../../pictures/logo.svg'></use>
      </svg>
      <ul className={s.nav_list}>
        <li className={s.nav_item}><Link to='/'>Головна</Link></li>
        <li className={s.nav_item}><Link to='/about'>Про нас</Link></li>
        <li className={s.nav_item}><Link to='/candles'>Свічки</Link></li>
        <li className={s.nav_item}><Link to='/cosmetics'>Косметика</Link></li>
        <li className={s.nav_item}><Link to='/cart'>Кошик</Link></li>
        <li className={s.nav_item}><Link to='/payment'>Оплата</Link></li>
        <li className={s.nav_item}><Link to='/shipping'>Доставка</Link></li>
      </ul>
    </header>
    </div>
    
  )
}