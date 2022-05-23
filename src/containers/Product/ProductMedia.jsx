import React, { useState } from "react";
import Media from "./Media";
import MediaList from "./MediaList";
import Spinner from "./Spinner";

const ProductMedia = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [media, setMedia] = useState({
    type: "image",
    src: `/products/P-${product.id}/media/i1-512.jpg`,
  });

  const handleMediaChange = (type, src) => {
    if (type === "image" && src !== media.src) setIsLoading(true);
    setMedia({ type, src });
  };

  return (
    <div className="product__main__media">
      <div className="product__main__media__wrapper">
        <Spinner isLoading={isLoading} />
        <Media
          type={media.type}
          src={media.src}
          alt={product.title}
          onLoad={() => setIsLoading(false)}
        />
        <MediaList
          productUrl={`/products/P-${product.id}`}
          alt={product.title}
          imageCount={product.details.media["image-count"]}
          videoCount={product.details.media["video-count"]}
          onChange={handleMediaChange}
        />
      </div>
    </div>
  );
};

export default ProductMedia;
