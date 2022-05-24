import React from "react";
import { FaStar } from "react-icons/fa";
import ShoppingCartProductCounter from "../../components/ShoppingCart/ShoppingCartProductCounter";

const ProductSpecifications = ({ product }) => (
  <div className="product__main__overview__spec">
    <h3>Detailes</h3>
    <table>
      <tbody>
        {Object.entries(product.details.spec).map(([k, v], idx) => (
          <tr key={`ps-${idx}`}>
            <td>{k}</td>
            <td>{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ProductVariants = ({ product }) => (
  <div className="product__main__overview__variants">
    <h3>Variants</h3>
    {product.details.variants.map((v) => (
      <select key={`pv-${v.name}`} name={v.name}>
        {v.values.map((o, idx) => (
          <option key={`pvv-${product.id}-${v.name}-${idx}`} value={o}>
            {o}
          </option>
        ))}
      </select>
    ))}
  </div>
);

const ProductAddToCart = ({ product }) => (
  <div className="product__main__overview__add-to-cart">
    {product.availableInStock && (
      <ShoppingCartProductCounter productId={product.id} />
    )}
  </div>
);

const ProductTitle = ({ product }) => {
  <h2 className="product__main__overview__title">{product.title}</h2>;
};

const ProductDescription = ({ product }) => (
  <div className="product__main__overview__desc">
    <p>{product.description}</p>
  </div>
);

const ProdcutRating = ({ product }) => (
  <div className="product__main__overview__ratings">
    <FaStar />
    <span>{product.rate}</span>
  </div>
);

const ProductPrice = ({ product }) => (
  <div className="product__main__overview__price">
    {product.availableInStock ? (
      <>
        <span>
          <span>$</span>
          {product.offerPrice.toFixed()}
          <span>{((product.offerPrice % 1) * 100).toFixed()}</span>
        </span>
        {!!product.off && <span>${product.price}</span>}
        {!!product.off && <span>{product.off * 100}%</span>}
      </>
    ) : (
      <div>Not Available</div>
    )}
  </div>
);

const ProductOverview = ({ product }) => {
  return (
    <div className="product__main__overview">
      <ProductTitle product={product} />
      <ProductDescription product={product} />
      <ProdcutRating product={product} />
      <ProductPrice product={product} />
      <ProductAddToCart product={product} />
      <ProductVariants product={product} />
      <ProductSpecifications product={product} />
    </div>
  );
};

export default ProductOverview;
