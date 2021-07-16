import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Routers from './Routers';
import NavBar from './Layout/NavBar';
import './App.css'

export default () => {
  return (
    <div className='app'>
      <Router>
        <div>
          <NavBar></NavBar>
          <Header></Header>
          <Routers></Routers>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}