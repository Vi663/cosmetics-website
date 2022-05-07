// import logo from '../../pictures/logo/logo.svg';
import * as candles from '../../todos.json'
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header'
import { HomeView } from '../../views/HomeView'
import { AboutView } from '../../views/AboutView'
import { CandlesView } from '../../views/CandlesView'
import { CosmeticsView } from '../../views/CosmeticsView'
import { CartView } from '../../views/CartView'
import { PaymentView } from '../../views/PaymentView'
import { ShippingView } from '../../views/ShippingView'
import { NotFoundView } from '../../views/NotFoundView'

const App = () => (
  <>
    <Header />
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/candles' element={<CandlesView candles={candles.default}/>} />
        <Route path='/cosmetics' element={<CosmeticsView />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/payment' element={<PaymentView />} />
        <Route path='/shipping' element={<ShippingView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
console.log(candles)