import React from 'react';
import hPh1 from './../../../assets/images/hph1.svg';
import hPh2 from './../../../assets/images/hph2.svg';
import star from './../../../assets/images/star.svg';

export const Headphones = () => {
  return (
    <div className="headphones">
      <h4>Наушники</h4>
      <div className="headphone d-flex flex-wrap justify-content-between gap-4">
        <div className=" d-flex align-items-center justify-content-center flex-column">
          <figure className="d-flex align-items-center justify-content-center ">
            <img src={hPh1} alt="" />
          </figure>
          <div className="headphones-price d-flex justify-content-between w-100">
            <p>Apple BYZ S852I</p>
            <div className="d-flex flex-column ">
              <span>2927 ₸</span>
              <span>3527 ₸</span>
            </div>
          </div>

          <p className="d-flex align-items-center justify-content-start w-100">
            <img className="m-0" src={star} alt="" />
            4.7
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <figure className="d-flex align-items-center justify-content-center ">
            <img src={hPh2} alt="" />
          </figure>
          <div className="headphones-price  d-flex justify-content-between w-100">
            <p>Apple BYZ S852I</p>
            <div className="d-flex flex-column ">
              <span>2927 ₸</span>
              <span>3527 ₸</span>
            </div>
          </div>

          <p className="d-flex align-items-center justify-content-start w-100">
            <img className="m-0" src={star} alt="" />
            4.7
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <figure className="d-flex align-items-center justify-content-center ">
            <img src={hPh1} alt="" />
          </figure>
          <div className="headphones-price d-flex justify-content-between w-100">
            <p>Apple BYZ S852I</p>
            <div className="d-flex flex-column ">
              <span>2927 ₸</span>
              <span>3527 ₸</span>
            </div>
          </div>

          <p className="d-flex align-items-center justify-content-start w-100">
            <img className="m-0" src={star} alt="" />
            4.7
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <figure className="d-flex align-items-center justify-content-center ">
            <img src={hPh2} alt="" />
          </figure>
          <div className="headphones-price d-flex justify-content-between w-100">
            <p>Apple BYZ S852I</p>
            <div className="d-flex flex-column ">
              <span>2927 ₸</span>
              <span>3527 ₸</span>
            </div>
          </div>

          <p className="d-flex align-items-center justify-content-start w-100">
            <img className="m-0" src={star} alt="" />
            4.7
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <figure className="d-flex align-items-center justify-content-center ">
            <img src={hPh1} alt="" />
          </figure>
          <div className="headphones-price d-flex justify-content-between w-100">
            <p>Apple BYZ S852I</p>
            <div className="d-flex flex-column ">
              <span>2927 ₸</span>
              <span>3527 ₸</span>
            </div>
          </div>

          <p className="d-flex align-items-center justify-content-start w-100">
            <img className="m-0" src={star} alt="" />
            4.7
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <figure className="d-flex align-items-center justify-content-center ">
            <img src={hPh2} alt="" />
          </figure>
          <div className=" headphones-price d-flex justify-content-between w-100">
            <p>Apple BYZ S852I</p>
            <div className=" d-flex flex-column ">
              <span>2927 ₸</span>
              <span>3527 ₸</span>
            </div>
          </div>

          <p className="d-flex align-items-center justify-content-start w-100">
            <img className="m-0" src={star} alt="" />
            4.7
          </p>
        </div>
      </div>
    </div>
  );
};
