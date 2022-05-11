import './Header.css';
import React from 'react';
import Img from '../Auxiliary/Img';
import Navbar from '../Navbar/Navbar';

const Header = () => (
  <div className="header">
    <Navbar />
    <div className="banner">
      <div className="leftSide">
        <div className="textArea">
          <p>
            Zadbaj o swój <span>samochód</span>
            <br /> z nami!
          </p>
        </div>
        <div className="bannerBtn">
          <a href="#">Umów się</a>
        </div>
      </div>
      <div className="rightside">
        <Img src="./mercedes.png" />
      </div>
    </div>
  </div>
);

export default Header;
