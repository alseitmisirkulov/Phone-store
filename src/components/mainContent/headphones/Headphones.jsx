import React from 'react';
import { headphones } from '../../../data/db';
import star from './../../../assets/images/star.svg';

export const Headphones = () => {
  
  return (
    <div className="headphones">
      <h4>Наушники</h4>
      <div className="headphone d-flex flex-wrap justify-content-between gap-4">
        {headphones.map((item) => (
          <div key={item.id} className=" d-flex align-items-center justify-content-center flex-column">
            <figure className="d-flex align-items-center justify-content-center ">
              <img src={item.img} alt={item.title} />
            </figure>
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
        ))}
      </div>
    </div>
  );
};
