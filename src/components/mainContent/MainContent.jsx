import React from 'react';
import cases1 from './../../assets/images/cases1.svg';
import cases2 from './../../assets/images/cases2.svg';
import cases3 from './../../assets/images/cases3.svg';
import hPh1 from './../../assets/images/hph1.svg';
import hPh2 from './../../assets/images/hph2.svg';
import star from './../../assets/images/star.svg';
import airpods1 from './../../assets/images/airpods.svg';
import logo from './../../assets/images/logo.svg';
import vk from './../../assets/images/VK.svg';
import lang from './../../assets/images/lang.svg';
import './MainContent.scss';

export const MainContent = () => {
  return (
    <div className="container main-content">
      <div className="cases">
        <h4>Чехлы</h4>
        <div className="case d-flex justify-content-between">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <img src={cases1} alt="" />
            <p>Стеклянные</p>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <img src={cases2} alt="" />
            <p>Силиконовые</p>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <img src={cases3} alt="" />
            <p>Кожаные</p>
          </div>
        </div>
      </div>
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
      <div className="airpods">
        <h4>Беспроводные наушники</h4>
        <div className="airpod d-flex flex-wrap justify-content-between gap-4">
          <div className=" d-flex align-items-center justify-content-center flex-column">
            <figure className="d-flex align-items-center justify-content-center ">
              <img src={airpods1} alt="" />
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
              <img src={airpods1} alt="" />
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
              <img src={airpods1} alt="" />
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
        </div>
      </div>
      <footer className="footer d-flex justify-content-between p-4 mt-5">
        <nav>
          <img src={logo} alt="" />
        </nav>
        <nav className="d-flex flex-column align-items-start gap-3">
          <a href="">Избранное</a>
          <a href="">Корзина</a>
          <a href="">Контакты</a>
        </nav>
        <nav className="d-flex flex-column align-items-start">
          <a href="">Условия сервиса</a>
          <nav className="d-flex align-items-start w-100 mt-3 gap-2">
            <img src={lang} alt="" />
            <span>Каз</span>
            <span>Рус</span>
            <span>Eng</span>
          </nav>
        </nav>
        <nav className="d-flex gap-3 align-items-start">
          <img src={vk} alt="" />
          <img src={vk} alt="" />
          <img src={vk} alt="" />
          <img src={vk} alt="" />
        </nav>
      </footer>
    </div>
  );
};
