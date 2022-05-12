import { NavLink } from "react-router-dom";
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
        {/* <NavLink to="/" className={s.nav_item} activeClassName={s.nav_item.active}>Home</NavLink> */}
        <li className={s.nav_item}><NavLink to='/' activeClassName="active">Головна</NavLink></li>
        <li className={s.nav_item}><NavLink to='/about' activeClassName={s.nav_item.active}>Про нас</NavLink></li>
        <li className={s.nav_item}><NavLink to='/candles' activeClassName={s.nav_item.active}>Свічки</NavLink></li>
        <li className={s.nav_item}><NavLink to='/cosmetics' activeClassName={s.nav_item.active}>Косметика</NavLink></li>
        <li className={s.nav_item}><NavLink to='/cart' activeClassName={s.nav_item.active}>Кошик</NavLink></li>
        <li className={s.nav_item}><NavLink to='/payment' activeClassName={s.nav_item.active}>Оплата</NavLink></li>
        <li className={s.nav_item}><NavLink to='/shipping' activeClassName={s.nav_item.active}>Доставка</NavLink></li>
      </ul>
    </header>
    </div>
  )
}