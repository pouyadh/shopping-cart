import React from "react";
import "./ShoppingCartProductCounter.scss";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  addItem,
} from "../../features/shoppingCart/shoppingCartSlice";

const ShoppingCartProductCounter = ({ productId }) => {
  const productsById = useSelector((state) => state.product.itemsById);
  const product = productsById[productId];
  const shoppingCartItemsById = useSelector(
    (state) => state.shoppingCart.itemsById
  );
  const item = shoppingCartItemsById[productId];
  const dispatch = useDispatch();

  if (!product?.availableInStock) {
    return (
      <div className="shopping-cart-product-counter">
        <div className="shopping-cart-product-counter__btn--disabled">
          Not Available
        </div>
      </div>
    );
  }

  if (!item)
    return (
      <div
        className="shopping-cart-product-counter"
        onClick={() => dispatch(addItem({ id: productId }))}
      >
        <div className="shopping-cart-product-counter__btn">Add to cart</div>
      </div>
    );

  return (
    <div className="shopping-cart-product-counter">
      <div className="shopping-cart-product-counter__counter">
        {item.count > 1 ? (
          <FaMinus
            className="shopping-cart-product-counter__counter__btn--minus"
            onClick={() => dispatch(removeItem({ id: item.id }))}
          />
        ) : (
          <FaTrash
            className="shopping-cart-product-counter__counter__btn--trash"
            onClick={() => dispatch(removeItem({ id: item.id }))}
          />
        )}
        <span className="shopping-cart-product-counter__counter__count">
          {item.count}
        </span>
        <FaPlus
          className="shopping-cart-product-counter__counter__btn--plus"
          onClick={() => dispatch(addItem({ id: item.id }))}
        />
      </div>
    </div>
  );
};

export default ShoppingCartProductCounter;
