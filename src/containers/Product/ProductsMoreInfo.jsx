import React from "react";
import Bullet from "./Bullet";
import CartStack from "./CartStack";
import HIT from "./HIT";
import Image from "./Image";
import ImageStack from "./ImageStack";
import Note from "./Note";
import Slider from "./Slider";
import Text from "./Text";

const ProductsMoreInfo = ({ product }) => {
  return product.details.other.map((item, idx) => {
    switch (item.type) {
      case "bullet":
        return <Bullet key={`pmf-${idx}`} {...item} />;
      case "note":
        return <Note key={`pmf-${idx}`} {...item} />;
      case "image":
        return <Image key={`pmf-${idx}`} product={product} {...item} />;
      case "image-stack":
        return <ImageStack key={`pmf-${idx}`} product={product} {...item} />;
      case "cart-stack":
        return <CartStack key={`pmf-${idx}`} product={product} {...item} />;
      case "slider":
        return <Slider key={`pmf-${idx}`} product={product} {...item} />;
      case "HIT":
        return <HIT key={`pmf-${idx}`} product={product} {...item} />;
      case "text":
        return <Text key={`pmf-${idx}`} {...item} />;
      default:
        return <React.Fragment key={`pmf-${idx}`}></React.Fragment>;
    }
  });
};

export default ProductsMoreInfo;
