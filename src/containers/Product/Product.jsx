import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";

import { useQuery } from "react-query";

import Bullet from "./Bullet";
import CartStack from "./CartStack";
import HIT from "./HIT";
import Image from "./Image";
import ImageStack from "./ImageStack";
import Note from "./Note";

import Slider from "./Slider";
import Text from "./Text";
import { useProductsById } from "../../features/product/productSlice";
import { productApi } from "../../APIs";

import ProductMedia from "./ProductMedia";
import ProductOverview from "./ProductOverview";

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
  const products = useProductsById();
  const { isLoading, data: details } = useQuery(
    ["product", params.productId, "details"],
    () => productApi.fetchDetailsById(params.productId)
  );

  if (isLoading) return <div>loading</div>;

  const product = {
    ...products[params.productId],
    details,
  };

  return (
    <div className="product">
      <div className="product__main">
        <ProductMedia product={product} />
        <ProductOverview product={product} />
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
