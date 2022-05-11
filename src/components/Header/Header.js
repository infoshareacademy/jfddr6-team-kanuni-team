import './Header.css';
import React from 'react';
import Img from '../Auxiliary/Img';

const Header = () => (
  <div className="header">
    <div className="banner">
      <div className="leftSide">
        <div className="textArea">
          <p>
            Zadbaj o swój <span>samochód</span>
            <br /> z nami!
          </p>
        </div>
      </div>
      <div className="rightside">
        <Img src="./mercedes.png" />
      </div>
    </div>
  </div>
);

export default Header;
