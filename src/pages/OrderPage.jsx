import React from 'react';
import './../styles/OrderPage.scss';
import orderGeo from './../assets/images/orderGeo.svg';
import visaSvg from './../assets/images/visaSvg.svg';
import promoSvg from './../assets/images/promo.svg';
import arrorRightSvg from './../assets/images/arrowRight.svg';
import arrowDownSvg from './../assets/images/arrowDown.svg';
import pen from './../assets/images/submitPen.svg';
import { Select } from './../components/common/select/Select';
import { Link } from 'react-router-dom';

export const OrderPage = () => {
  const orderVisaTypes = [
    {
      id: 1,
      option: 'MasterCard',
    },
    {
      id: 2,
      option: 'YouMooney',
    },
    {
      id: 3,
      option: 'PayPal',
    },
  ];
  const promoTypes = [
    {
      id: 1,
      option: 'да',
    },
    {
      id: 2,
      option: 'нет',
    },
  ];
  return (
    <div className="order-page">
      <div className="container order-page__section ">
        <h4>Оформление заказа</h4>
        <form>
          <div className="row gap-4">
            <div className="order-page__block col">
              <div>
                <h3>Доставка курьером</h3>
                <span> 499 сом</span>
              </div>
              <div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11696.552555433744!2d74.60490565!3d42.86992839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681211859217!5m2!1sru!2skg"
                  width="600"
                  height="173"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="my-3">
                <img src={orderGeo} alt="Геолокация" />
                <span>Адрес доставки</span>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="order-page__input">
                  <input type="phone" placeholder="Город " />
                  <img src={pen} alt="Город" />
                </div>
                <div className="order-page__input">
                  <input type="phone" placeholder="Улица / Район" />
                  <img src={pen} alt="Улица / Район" />
                </div>
                <div className='d-flex gap-3'>
                  <div className='w-50'>
                    <div className="order-page__input mb-3">
                      <input type="phone" placeholder="Дом" />
                      <img src={pen} alt="Дом" />
                    </div>
                    <div className="order-page__input mb-3">
                      <input type="phone" placeholder="Квартира" />
                      <img src={pen} alt="Квартира" />
                    </div>
                  </div>
                  <div  className='w-50'>
                    <div className="order-page__input">
                      <input type="phone" placeholder="Подъезд" />
                      <img src={pen} alt="Подъезд" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex flex-column gap-3">
              <div className="order-page__block">
                <h3>Ваш заказ</h3>
                <div className='d-flex justify-content-between'>
                  <span>1х</span>
                  <p>Наушники Apple BYZ S852I</p>
                  <span>2 927 сом</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <span></span>
                  <p>Доставка</p>
                  <span>2 927 сом</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <span></span>
                  <p>К оплате</p>
                  <span>2 927 сом</span>
                </div>
              </div>
              <div className="order-page__block">
                <h3>Способ оплаты</h3>
                <Select
                  text="Счет на kaspi.kz"
                  selectType={visaSvg}
                  data={orderVisaTypes}
                  img={arrowDownSvg}
                />
                <Select
                  text="Есть промокод?"
                  selectType={promoSvg}
                  data={promoTypes}
                  img={arrorRightSvg}
                />
              </div>
              <div className="order-page__block">
                <h3>Номер получателя</h3>
                <div className="order-page__input">
                  <input type="phone" placeholder="+996 _ _ _ _ _ _" />
                  <img src={pen} alt="Номер телефона" />
                </div>
              </div>
              <Link to='/ready-order'>Закончить оформление</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
