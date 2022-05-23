export const fetchAll = () =>
  fetch("products/products.json").then((res) => res.json());

const productApi = { fetchAll };

export default productApi;
