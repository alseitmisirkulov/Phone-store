/* eslint-disable jsx-a11y/iframe-has-title */
import imgSvg from './../assets/images/cases1.svg';
import plusSvg from './../assets/images/plus.svg';
import minusSvg from './../assets/images/minus.svg';
import delSvg from './../assets/images/del.svg';
import './Cart.scss';

export const Cart = () => {
  return (
    <div className="cart-wrapper container">
      <div className="row">
        <div className="col">
          <h4>Корзина</h4>
          <div>
            <div className="cart-item d-flex justify-content-between mb-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column align-items-center justify-content-between">
                  <figure className="d-flex align-items-center justify-content-center">
                    <img src={imgSvg} alt="" />
                  </figure>
                  <div className="d-flex gap-3">
                    <img src={plusSvg} alt="" />
                    1
                    <img src={minusSvg} alt="" />
                  </div>
                </div>
                <div className="d-flex justify-content-center flex-column">
                  <p>Apple BYZ S852I</p>
                  <span>2 927 ₸</span>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-end">
                <img src={delSvg} alt="" />
                <span>2 927 ₸</span>
              </div>
            </div>
            <div className="cart-item">
              <h4>Доставка</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11696.552555433744!2d74.60490565!3d42.86992839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1681211859217!5m2!1sru!2skg"
                width="600"
                height="173"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div>
                <div></div>
                <span> 499 ₸</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
