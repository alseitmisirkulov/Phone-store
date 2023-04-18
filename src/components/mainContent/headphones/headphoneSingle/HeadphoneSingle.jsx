import star from './../../../../assets/images/star.svg';
import fav from './../../../../assets/images/fav.svg';
import favClick from './../../../../assets/images/clickFav.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const HeadphoneSingle = ({item}) => {
  const [active, setActive] = useState(false);
  console.log(item);

  const selectFavoriteItem = () => {
    setActive(!active);
  };

  return (
    <div className="position-relative d-flex align-items-center justify-content-center flex-column">
      {active ? (
        <img
          onClick={selectFavoriteItem}
          src={favClick}
          alt="Избранное"
          className={'favorite position-absolute'}
        />
      ) : (
        <img
          onClick={selectFavoriteItem}
          src={fav}
          alt="Избранное"
          className="favorite position-absolute"
        />
      )}

      <Link to={`/catalog-item/${item.id}`}>
        <figure className="d-flex align-items-center justify-content-center ">
          <img src={item.img} alt={item.title} />
        </figure>
      </Link>

      <div className="headphones-price d-flex justify-content-between w-100">
        <p>{item.title}</p>
        <div className="d-flex flex-column ">
          <span>{item.newPrice} ₸</span>
          <span>{item.oldPrice} ₸</span>
        </div>
      </div>
      <p className="d-flex align-items-center justify-content-start w-100">
        <img className="m-0" src={star} alt="" />
        4.7
      </p>
    </div>
  );
};
