import React from "react";
import "./Product.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { star } from "../../constants/images";

const Product = () => {
  const params = useParams();
  const products = useSelector((state) => state.product.itemsById);
  const product = products[params.productId];
  return (
    <div className="product">
      <div className="product__main">
        <div className="product__main__media">
          <img src={product.img512} alt={product.title} />
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
            <span>
              <span>$</span>
              {product.offerPrice.toFixed()}
              <span>{((product.offerPrice % 1) * 100).toFixed()}</span>
            </span>
            <span>${product.price}</span>
            <span>{product.off * 100}%</span>
          </div>
          <div className="product__main__overview__variants">
            <h3>Variants</h3>
            {product.variants.map((v) => (
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
                {Object.entries(product.spec).map(([k, v], idx) => (
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
      <div className="product__bullets">
        <h3>About this product</h3>
        <ul>
          {product.bullets.map((blt, idx) => (
            <li key={`pb-${product.id}-${idx}`}>{blt}</li>
          ))}
        </ul>
      </div>
      <div className="product__notes">
        {product.notes.map((n, idx) => (
          <p key={`pn-${product.id}-${idx}`}>
            <strong>Note: </strong>
            {n}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Product;
