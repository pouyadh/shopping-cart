import React from "react";
import "./ShoppingCart.scss";
import { cross } from "../../constants/images";
import { useSelector } from "react-redux";
import { useModal } from "../../containers/Modals";

import ShoppingCartProductCounter from "./ShoppingCartProductCounter";

const ShoppingCart = () => {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.items);
  const productsById = useSelector((state) => state.product.itemsById);
  const items = shoppingCartItems.map(({ id, count }) => ({
    ...productsById[id],
    count,
  }));

  const modal = useModal();

  const totalPrice = items
    .reduce((t, item) => t + item.price * item.count, 0)
    .toFixed(2);

  if (items.length === 0)
    return (
      <div className="shopping-cart">
        <div className="shopping-cart__header">
          <span className="shopping-cart__header__title">Shopping Cart</span>
          <img
            src={cross}
            className="shopping-cart__header__close-btn"
            alt="close"
            onClick={() => modal.closeModal()}
          />
        </div>
        <div className="shopping-cart__text">Your cart is empty.</div>
      </div>
    );

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <span className="shopping-cart__header__title">Shopping Cart</span>
        <img
          src={cross}
          className="shopping-cart__header__close-btn"
          alt="close"
          onClick={() => modal.closeModal()}
        />
      </div>
      <span className="shopping-cart__item-count">{items.length} items</span>
      <div className="shopping-cart__list">
        {items.map((item) => (
          <React.Fragment key={`ShoppingCartItem${item.id}`}>
            <div className="shopping-cart__list__item">
              <img
                src={`/products/P-${item.id}/media/i1-64.jpg`}
                className="shopping-cart__list__item__thumb"
                alt={item.title}
              />
              <div className="shopping-cart__list__item__desc">
                <div className="shopping-cart__list__item__desc__name">
                  {item.title}
                </div>
                <div className="shopping-cart__list__item__desc__price">
                  ${item.offerPrice}
                </div>
              </div>
              <ShoppingCartProductCounter productId={item.id} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="shopping-cart__footer">
        <span className="shopping-cart__footer__total">
          Total: ${totalPrice}
        </span>
        <button className="shopping-cart__footer__btn">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
