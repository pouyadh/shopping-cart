import React, { useState, useRef, useEffect } from "react";
import { arrowLeft, arrowRight } from "../../constants/images";

const Slider = ({ idx, product, data }) => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();
  const handleRightArrow = (e) => {
    if (index >= data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleLeftArrow = (e) => {
    if (index <= 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleDot = (idx) => {
    setIndex(idx);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.scrollTo({
      left: (index * slider.scrollWidth) / data.length,
      behavior: "smooth",
    });
    const handleResize = () => {
      slider.scrollTo({
        left: (index * slider.scrollWidth) / data.length,
        behavior: "smooth",
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index, data]);

  return (
    <div className="product__slider">
      <div className="product__slider__wrapper" ref={sliderRef}>
        {data.map((slide, idx2) => (
          <span
            key={`other[${idx}]-s${idx2}`}
            className="product__slider__slide"
          >
            <img
              src={`/products/P-${product.id}${slide.image}`}
              alt={product.title}
            />
            <span>
              <h2 className="product__slider__slide__title">{slide.title}</h2>
              <span className="product__slider__slide__text">{slide.text}</span>
            </span>
          </span>
        ))}
      </div>
      <span className="product__slider__arrow--left" onClick={handleLeftArrow}>
        <img src={arrowLeft} alt="left arrow" />
      </span>
      <span
        className="product__slider__arrow--right"
        onClick={handleRightArrow}
      >
        <img src={arrowRight} alt="left arrow" />
      </span>
      <span className="product__slider__dots">
        {data.map((slide, idx2) => (
          <span
            className={`product__slider__dots__dot${
              index === idx2 ? "--active" : ""
            }`}
            key={`slider-${idx}-dot-${idx2}`}
            onClick={() => handleDot(idx2)}
          ></span>
        ))}
      </span>
    </div>
  );
};

export default Slider;
