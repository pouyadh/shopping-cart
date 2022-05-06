import React, { useState, useRef, useEffect } from "react";
import "./Slider.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ list, autoRole, withArrow, withDots }) => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();
  const handleRightArrow = (e) => {
    if (index >= list.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleLeftArrow = (e) => {
    if (index <= 0) {
      setIndex(list.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleDot = (slideIndex) => {
    setIndex(slideIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.scrollTo({
      left: (index * slider.scrollWidth) / list.length,
      behavior: "smooth",
    });

    const handleResize = () => {
      slider.scrollTo({
        left: (index * slider.scrollWidth) / list.length,
        behavior: "smooth",
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index, list]);

  useEffect(() => {
    let t;
    if (autoRole) {
      t = setTimeout(() => {
        handleRightArrow();
      }, 3000);
    }
    return () => {
      clearTimeout(t);
    };
  }, [index, autoRole]);

  return (
    <div className="slider">
      <div className="slider__wrapper" ref={sliderRef}>
        {list.map((slide, idx) => (
          <span key={`slide-${idx}`} className="slider__slide">
            <img src={slide.imageSrc} alt={slide.imageAlt} />
            <span>
              <h2 className="slider__slide__title">{slide.title}</h2>
              <span className="slider__slide__text">{slide.text}</span>
            </span>
          </span>
        ))}
      </div>
      {withArrow && (
        <>
          <span className="slider__arrow--left" onClick={handleLeftArrow}>
            <FaArrowLeft />
          </span>
          <span className="slider__arrow--right" onClick={handleRightArrow}>
            <FaArrowRight />
          </span>
        </>
      )}
      {withDots && (
        <span className="slider__dots">
          {list.map((slide, idx) => (
            <span
              className={`slider__dots__dot${index === idx ? "--active" : ""}`}
              key={`slide-dot-${idx}`}
              onClick={() => handleDot(idx)}
            ></span>
          ))}
        </span>
      )}
    </div>
  );
};

export default Slider;
