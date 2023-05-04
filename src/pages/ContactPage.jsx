import React from 'react';
import orderGeo from '../assets/images/orderGeo.svg';
import vk from '../assets/images/VK.svg';
import phone from '../assets/images/phone-contact.svg';
import '../styles/ContactPage.scss'
import { Link } from 'react-router-dom';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container contact-page__section">
        <div className="row">
          <div className="contact-page__block col">
            <h4>Наш офис</h4>
            <div>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11696.552555433744!2d74.60490565!3d42.86992839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681211859217!5m2!1sru!2skg"
                width="600"
                height="400"
                allowfullscreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="my-3 order-page__location">
              <img src={orderGeo} alt="Геолокация" />
              <div>
                <span>Аксай-3а, 62ф, Алматы, Казахстан</span>
                <span>3 этаж 35 кабинет</span>
              </div>
            </div>
          </div>
          <div className="contact-page__links col-1 ">
            <div className="contact-page__block d-flex align-items-center justify-content-center">
             <Link to='https://wa.me/996551261025'><img src={vk} alt="vk" /></Link> 
            </div>
            <div className="contact-page__block d-flex align-items-center justify-content-center">
              <img src={vk} alt="vk" />
            </div>
            <div className="contact-page__block d-flex align-items-center justify-content-center">
              <img src={vk} alt="vk" />
            </div>
            <div className="contact-page__block d-flex align-items-center justify-content-center">
              <img src={vk} alt="vk" />
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center mt-5'>
          <img src={phone} alt="phone" />
          <p className='mb-0 mx-4'>+7 777 777 77 77</p>
        </div>
      </div>
    </div>
  );
};
