import ToDoList from './src/components/todo/ToDoList';
import ProductList from './src/components/product/ProductList';
import ProductDetail from './src/components/productDetail/ProductDetail';
import AddProductWidget from './src/components/product/AddProductWidget';
import Page404 from './src/components/page404/Page404';
import Weather from './src/components/weather/Weather';
import 'react-image-lightbox/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ROUTE_ADD_PRODUCT,
  ROUTE_HOME,
  ROUTE_PRODUCT_DETAIL,
  ROUTE_PRODUCT_LIST,
  ROUTE_TODO_LIST,
  ROUTE_WEATHER_DETAIL,
  ROUTE_WEATHER,
  ROUTE_OTP,
} from './src/components/navigator/constants';
import './App.scss';
import OTP from './src/components/otp/OTP';
import WeatherByLocation from './src/components/weather/detail/WeatherByLocation';
import Home from './src/components/home/Home';
import Layout from './src/components/layout/Layout';
import React = require('react');

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE_PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={ROUTE_PRODUCT_LIST} element={<ProductList />} />
          <Route path={ROUTE_ADD_PRODUCT} element={<AddProductWidget />} />
          <Route path={ROUTE_TODO_LIST} element={<ToDoList />} />
          <Route path={ROUTE_WEATHER_DETAIL} element={<WeatherByLocation />} />
          <Route path={ROUTE_WEATHER} element={<Weather />} />
          <Route path={ROUTE_OTP} element={<OTP />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
