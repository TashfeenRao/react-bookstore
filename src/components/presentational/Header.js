import React from 'react';
import '../../styles/header.css';
import svg from '../../man-shape.svg';

const Header = () => (
  <div className="panel-bg">
    <div className="bookstore-container">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <p className="BOOKS">BOOKS</p>
      <p className="CATEGORIES">CATEGORIES</p>
    </div>
    <div className="oval-container">
      <div className="Oval">
        <img className="Mask" alt="mask" src={svg} />
      </div>
    </div>
  </div>
);
export default Header;
