import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart/Cart";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

const fetchSlideList = () => fetch("/slides.json").then((resp) => resp.json());

export default function Home() {
  const products = useSelector((state) => state.product.items);
  const { isLoading, data: slideList } = useQuery("slide-list", fetchSlideList);

  return (
    <>
      <div className="home__cover">
        {!isLoading && <Slider list={slideList} autoRole withDots />}
      </div>
      <div className="home__cart-container">
        {products.map((item) => (
          <Cart
            key={item.id}
            {...item}
            img256={`/products/P-${item.id}/media/i1-256.jpg`}
          />
        ))}
      </div>
    </>
  );
}
