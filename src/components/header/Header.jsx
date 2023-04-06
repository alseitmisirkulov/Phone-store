import React from 'react';
import phoneSvg from './../../assets/images/phone.svg';
import likeSvg from './../../assets/images/like.svg';
import arrowDownSvg from './../../assets/images/arrowDown.svg';
import cartSvg from './../../assets/images/cart.svg';

export const Header = () => {
  return (
    <header className="menu container">
      <div className="menu_time">
        <h2 className="menu_link">QPICK</h2>
        <div className="menu_nime">
          <img src={phoneSvg} alt="" />
          <span className="">Выбрать модель телефона</span>
          <img src={arrowDownSvg} alt="" />
        </div>
      </div>
      <div className="menu_top">
        <img src={likeSvg} alt="" />
        <img src={cartSvg} alt="" />
      </div>
    </header>
  );
};
