import React from 'react';
import phoneSvg from './../../assets/images/phone.svg';
import likeSvg from './../../assets/images/like.svg';
import cartSvg from './../../assets/images/cart.svg';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.svg';
import { Select } from '../common/select/Select';

export const Header = ({totalQty}) => {
  return (
    <header className="menu container">
      <div className="menu_time">
        <Link to="/" style={{marginRight:20}}>
          <img src={logo} alt="" />
        </Link>
        <Select 
        selectType={phoneSvg} 
        text="Выбрать модель телефона" />
      </div>
      <div className="menu_top">
        <Link to="/favorites">
          <img src={likeSvg} alt="" />
        </Link>
        <Link to="/cart" className='d-flex ailgn-items-center gap-2'>
          <img src={cartSvg} alt="" />
          <span>{totalQty}</span>
        </Link>
      </div>
    </header>
  );
};
