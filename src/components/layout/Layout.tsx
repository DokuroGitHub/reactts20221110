import NavBar from '../navigator/NavBar';
import { Outlet } from 'react-router-dom';
import React = require('react');

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
