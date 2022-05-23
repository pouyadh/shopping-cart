import React from "react";
import { FaStar } from "react-icons/fa";
import ShoppingCartProductCounter from "../../components/ShoppingCart/ShoppingCartProductCounter";

const ProductOverview = ({ product }) => {
  return (
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
        {product.details.variants.map((v) => (
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
            {Object.entries(product.details.spec).map(([k, v], idx) => (
              <tr key={`ps-${product.id}-${idx}`}>
                <td>{k}</td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductOverview;
