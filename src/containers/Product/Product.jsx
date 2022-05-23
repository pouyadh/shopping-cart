import React from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useProductsById } from "../../features/product/productSlice";
import { productApi } from "../../APIs";
import ProductMedia from "./ProductMedia";
import ProductOverview from "./ProductOverview";
import ProductMoreInfo from "./ProductsMoreInfo";

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
      <ProductMoreInfo product={product} />
    </div>
  );
};

export default Product;
