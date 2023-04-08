import React from 'react';
import Airpods from '../components/mainContent/airpods/Airpods';
import { airpodsData } from '../data/db';
import { EmptyCart } from './EmptyCart';

export const Cart = () => {
  return(
<div>
  {airpodsData.length
? airpodsData.map((el) => <div
key={el.id}
className=" d-flex align-items-center justify-content-center flex-column">
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
  {/* <img className="m-0" src={star} alt={el.rating} /> */}
  {el.rating}
</p>
</div>) 
: <EmptyCart />}
</div>
  ) 
};
