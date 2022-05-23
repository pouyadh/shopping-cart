const fetchAll = () =>
  fetch("products/products.json").then((res) => res.json());

const fetchDetailsById = (id) =>
  fetch(`/products/P-${id}/detail.json`).then((resp) => resp.json());

const productApi = { fetchAll, fetchDetailsById };

export default productApi;
