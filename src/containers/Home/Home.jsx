import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart/Cart";
import "./Home.scss";

export default function Home() {
  const products = useSelector((state) => state.product.items);
  return (
    <>
      <main>
        <div className="home__cart-container">
          {products.map((item) => (
            <Cart key={item.id} {...item} />
          ))}
        </div>
      </main>
    </>
  );
}
