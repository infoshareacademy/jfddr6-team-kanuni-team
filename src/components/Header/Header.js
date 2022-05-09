import './Header.css';
import React from 'react';
import Img from '../Auxiliary/Img';

const Header = () => (
  <div className="header">
    <Img className="banerImg" src="./baner.png" />
    <h1 className="motto">czystsze nie bedzie</h1>
  </div>
);

export default Header;
