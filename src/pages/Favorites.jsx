import { Link } from 'react-router-dom';
import './../styles/Favorite.scss';

export const Favorites = ({ favorite }) => {
  return (
    <>
      {favorite.length ? (
        <div className="favorite-page container">
          <h4>Избранное</h4>
          <div className="headphones">
            <h4>Наушники</h4>
            <div className="d-flex flex-wrap gap-4 justify-content-between">
              {favorite.map((item) => (
                <div className="favorite-page__card position-relative d-flex align-items-center justify-content-center flex-column">
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
                    <img className="m-0" src="" alt="" />
                    4.7
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '25px',height:'46vh', marginTop: '50px', textAlign: 'center' }}>
          Страница избранных пуста!
        </p>
      )}
    </>
  );
};
