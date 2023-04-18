import React from 'react';
import { Link } from 'react-router-dom';
import star from './../../../assets/images/star.svg';

const Airpods = ({ db }) => {
  return (
    <div className="airpods">
      <h4>Беспроводные наушники</h4>
      <div className="airpod d-flex flex-wrap justify-content-between gap-4">
        {db[2].airpods.map((el) => (
          <div
            key={el.id}
            className=" d-flex align-items-center justify-content-center flex-column">
            <Link to={`/catalog-item/${el.id}`}>
              <figure className="d-flex align-items-center justify-content-center ">
                <img src={el.img} alt={el.name} />
              </figure>
              <div className="headphones-price d-flex justify-content-between w-100">
                <p>{el.name}</p>
                <div className="d-flex flex-column ">
                  <span>{el.newPrice} ₸</span>
                  <span>{el.oldPrice} ₸</span>
                </div>
              </div>
              <p className="d-flex align-items-center justify-content-start w-100">
                <img className="m-0" src={star} alt={el.rating} />
                {el.rating}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Airpods;
