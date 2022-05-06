import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { useQuery } from "react-query";

import Bullet from "./Bullet";
import CartStack from "./CartStack";
import HIT from "./HIT";
import Image from "./Image";
import ImageStack from "./ImageStack";
import Media from "./Media";
import MediaList from "./MediaList";
import Note from "./Note";
import ShoppingCartProductCounter from "../../components/ShoppingCart/ShoppingCartProductCounter";
import Slider from "./Slider";
import Spinner from "./Spinner";
import Text from "./Text";
import { useProductsById } from "../../features/product/productSlice";

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

const fetchProductDetails = (id) =>
  fetch(`/products/P-${id}/detail.json`).then((resp) => resp.json());

const Product = () => {
  const params = useParams();
  const products = useProductsById();
  const product = products[params.productId];
  const { isLoading, data: details } = useQuery(
    ["product", product.id, "details"],
    () => fetchProductDetails(product.id),
    {
      enabled: !!product,
    }
  );

  const [isMediaLoading, setIsMediaLoading] = useState(false);

  const [media, setMedia] = useState({
    type: "image",
    src: `/products/P-${params.productId}/media/i1-512.jpg`,
  });

  const handleMediaChange = (type, src) => {
    setMedia({ type, src });
  };

  useEffect(() => {
    setMedia({
      type: "image",
      src: `/products/P-${params.productId}/media/i1-512.jpg`,
    });
  }, [params]);

  useEffect(() => {
    if (media.type === "image") setIsMediaLoading(true);
  }, [media.src]);

  if (isLoading) return <div>loading</div>;

  return (
    <div className="product">
      <div className="product__main">
        <div className="product__main__media">
          <div className="product__main__media__wrapper">
            <Spinner isLoading={isMediaLoading} />
            <Media
              type={media.type}
              src={media.src}
              alt={product.title}
              onLoad={() => setIsMediaLoading(false)}
            />
            <MediaList
              productUrl={`/products/P-${product.id}`}
              alt={product.title}
              imageCount={details.media["image-count"]}
              videoCount={details.media["video-count"]}
              onChange={handleMediaChange}
            />
          </div>
        </div>
        <div className="product__main__overview">
          <h2 className="product__main__overview__title">{product.title}</h2>
          <div className="product__main__overview__desc">
            <p>{product.description}</p>
          </div>
          <div className="product__main__overview__ratings">
            <FaStar />
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
          <div className="product__main__overview__add-to-cart">
            {product.availableInStock && (
              <ShoppingCartProductCounter productId={product.id} />
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
