/* eslint-disable jsx-a11y/iframe-has-title */

import './../styles/Cart.scss';
import { CartItem } from '../components/cart/CartItem';
import { CartDelivery } from '../components/cart/CartDelivery';
import { CartTotal } from '../components/cart/CartTotal';
import { EmptyCart } from './EmptyCart';

export const Cart = ({emptyCartDb,handleRemove}) => {
  return (
    <>
      {emptyCartDb.length ? (
        <div className="cart-wrapper container">
          <h4>Корзина</h4>
          <div className="row">
            <div className="col">
              <div>
                {emptyCartDb.map((element) => (
                  <CartItem handleRemove={handleRemove} key={element.id} {...element} element={element} />
                ))}

                <CartDelivery />
              </div>
            </div>
            <CartTotal />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
