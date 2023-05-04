import phoneSvg from './../../assets/images/phone.svg';
import likeSvg from './../../assets/images/like.svg';
import cartSvg from './../../assets/images/cart.svg';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.svg';
import { Select } from '../common/select/Select';
import arrowDownSvg from './../../assets/images/arrowDown.svg';

export const Header = ({ totalQty, favorite }) => {
  const phoneModels = [
    {
      id: 1,
      model: 'IPhone',
    },
    {
      id: 2,
      model: 'Sumsung',
    },
    {
      id: 3,
      model: 'Xiomi',
    },
  ];
  return (
    <header className="menu container">
      <div className="menu_time">
        <Link to="/" style={{ marginRight: 20 }}>
          <img src={logo} alt="" />
        </Link>
        <Select
          selectType={phoneSvg}
          text="Выбрать модель телефона"
          data={phoneModels}
          img={arrowDownSvg}
        />
      </div>
      <div className="menu_top">
        <Link to="/favorites" className="d-flex ailgn-items-center gap-2">
          <img src={likeSvg} alt="" />
          <span>{favorite.length}</span>
        </Link>
        <Link to="/cart" className="d-flex ailgn-items-center gap-2">
          <img src={cartSvg} alt="" />
          <span>{totalQty}</span>
        </Link>
      </div>
    </header>
  );
};
