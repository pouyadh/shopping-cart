import React, { useEffect, useRef, useState } from "react";
import "./Product.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { play, star } from "../../constants/images";

import { useQuery } from "react-query";

import { arrowLeft, arrowRight } from "../../constants/images";

const Bullet = ({ idx, product, title, data }) => (
  <div className="product__bullets">
    <h3>{title}</h3>
    <ul>
      {data.map((blt, idx) => (
        <li key={`pb-${product.id}-${idx}`}>{blt}</li>
      ))}
    </ul>
  </div>
);

const Note = ({ idx, product, data }) => (
  <div className="product__notes">
    <p>
      <strong>Note: </strong>
      {data}
    </p>
  </div>
);

const Text = ({ idx, product, title, text }) => (
  <div className="product__text">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const Image = ({ idx, product, image }) => (
  <div className="product__image">
    <img src={`/products/P-${product.id}${image}`} alt="im" />
  </div>
);

const ImageStack = ({ idx, product, data }) => (
  <div className="product__image-stack">
    {data.map((src, idx2) => (
      <img
        key={`other-${product.id}-${idx}-${idx2}`}
        src={`/products/P-${product.id}${src}`}
        alt={product.title}
      />
    ))}
  </div>
);

const HIT = ({ idx, product, title, image, text }) => (
  <div className="product__hit">
    <h1>{title}</h1>
    <img src={`/products/P-${product.id}${image}`} alt={title} />
    <p>{text}</p>
  </div>
);

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
    slider.scrollLeft = (index * slider.scrollWidth) / data.length;
  }, [index]);

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

const CartStack = ({ idx, product, title, data }) => (
  <div className="product__cart-stack">
    <h3>{title}</h3>
    <div className="product__cart-stack__wrapper">
      {data.map((item, idx2) => (
        <div
          key={`other[${idx}]-cs${idx2}`}
          className="product__cart-stack__wrapper__cart"
        >
          <img
            src={`/products/P-${product.id}${item.image}`}
            alt={product.title}
          />
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const OtherSwitch = ({ idx, item, product }) => {
  switch (item.type) {
    case "bullet":
      return <Bullet idx={idx} product={product} {...item} />;
    case "note":
      return <Note idx={idx} product={product} {...item} />;
    case "image":
      return <Image idx={idx} product={product} {...item} />;
    case "image-stack":
      return <ImageStack idx={idx} product={product} {...item} />;
    case "cart-stack":
      return <CartStack idx={idx} product={product} {...item} />;
    case "slider":
      return <Slider idx={idx} product={product} {...item} />;
    case "HIT":
      return <HIT idx={idx} product={product} {...item} />;
    case "text":
      return <Text idx={idx} product={product} {...item} />;
    default:
      return <></>;
  }
};

const Product = () => {
  const params = useParams();
  const products = useSelector((state) => state.product.itemsById);
  const product = products[params.productId];
  const { isLoading, data: details } = useQuery("product-details", () =>
    fetch(`/products/P-${product.id}/detail.json`).then((resp) => resp.json())
  );

  const [media, setMedia] = useState({
    type: "image",
    src: `/products/P-${product.id}/media/i1-512.jpg`,
  });

  if (isLoading) return <div>loading</div>;

  return (
    <div className="product">
      <div className="product__main">
        <div className="product__main__media">
          <div>
            {media.type === "image" ? (
              <img src={media.src} alt={product.title} />
            ) : (
              <video src={media.src} controls preload="meta" />
            )}

            <div>
              {Array(details.media["image-count"])
                .fill(null)
                .map((item, idx) => (
                  <div
                    key={`pimage-${idx}`}
                    onClick={() =>
                      setMedia({
                        type: "image",
                        src: `/products/P-${product.id}/media/i${
                          idx + 1
                        }-512.jpg`,
                      })
                    }
                  >
                    <img
                      src={`/products/P-${product.id}/media/i${idx + 1}-64.jpg`}
                      alt={product.title}
                    />
                  </div>
                ))}
              {Array(details.media["video-count"])
                .fill(null)
                .map((item, idx) => (
                  <div
                    key={`pvideo-${idx}`}
                    onClick={() =>
                      setMedia({
                        type: "video",
                        src: `/products/P-${product.id}/media/v${idx + 1}.mp4`,
                      })
                    }
                  >
                    <img
                      src={`/products/P-${product.id}/media/i1-64.jpg`}
                      alt={product.title}
                    />
                    <img src={play} alt="play" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="product__main__overview">
          <h2 className="product__main__overview__title">{product.title}</h2>
          <div className="product__main__overview__desc">
            <p>{product.description}</p>
          </div>
          <div className="product__main__overview__ratings">
            <img src={star} alt="star" />
            <span>{product.rate}</span>
          </div>
          <div className="product__main__overview__price">
            {product.availableInStock && (
              <span>
                <span>$</span>
                {product.offerPrice.toFixed()}
                <span>{((product.offerPrice % 1) * 100).toFixed()}</span>
              </span>
            )}
            {!product.availableInStock && <div>Not Available</div>}
            {!!product.off && (
              <>
                <span>${product.price}</span>
                <span>{product.off * 100}%</span>
              </>
            )}
          </div>
          <div className="product__main__overview__variants">
            <h3>Variants</h3>
            {details.variants.map((v) => (
              <select key={`pv-${product.id}-${v.name}`} name={v.name}>
                {v.values.map((o, idx) => (
                  <option key={`pvv-${product.id}-${v.name}-${idx}`} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ))}
          </div>
          <div className="product__main__overview__spec">
            <h3>Detailes</h3>
            <table>
              <tbody>
                {Object.entries(details.spec).map(([k, v], idx) => (
                  <tr key={`ps-${product.id}-${idx}`}>
                    <td>{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {details.other.map((item, idx) => (
        <OtherSwitch
          key={`other-${item.type}-${idx}`}
          idx={idx}
          item={item}
          product={product}
        />
      ))}
    </div>
  );
};

export default Product;
