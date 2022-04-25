import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ProductSearch.scss";
import { search, cross } from "../../constants/images";
import { useSelector } from "react-redux";
import { useModal } from "../../containers/Modals";

const SORT_FUNCTIONS = {
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  alphAsc: (a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
  alphDesc: (a, b) =>
    b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
  rateAsc: (a, b) => a.rate - b.rate,
  rateDesc: (a, b) => b.rate - a.rate,
};

const ProductSearch = () => {
  const products = useSelector((state) => state.product.items);
  const modal = useModal();

  const [result, setResult] = useState([]);
  const [sortMethod, setSortMethod] = useState("none");
  const [filters, setFilters] = useState({
    withOffer: false,
    availableInStock: false,
  });

  const timerRef = useRef(null);
  const searchTextRef = useRef();
  const oldTextValueRef = useRef(null);

  const refreshResult = useCallback(
    (searchValue) => {
      if (searchValue.length < 2) {
        setResult([]);
        return;
      }
      let tempResult = products.filter(
        (item) => item.title.search(new RegExp(searchValue, "gi")) !== -1
      );
      //let tempResult = JSON.parse(JSON.stringify(products));
      if (filters.withOffer) {
        tempResult = tempResult.filter((item) => item.off);
      }
      if (filters.availableInStock) {
        tempResult = tempResult.filter((item) => item.availableInStock);
      }
      if (sortMethod !== "none") {
        tempResult = tempResult.sort(SORT_FUNCTIONS[sortMethod]);
      }

      setResult(tempResult);
    },
    [products, sortMethod, filters, setResult]
  );

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const oldValue = oldTextValueRef.current;
      const currentValue = searchTextRef.current.value;
      if (oldValue !== currentValue) {
        refreshResult(currentValue);
      }
      oldTextValueRef.current = currentValue;
    }, 500);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [refreshResult]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.checked });
  };

  const handleSortChange = (e) => {
    setSortMethod(e.target.value);
  };

  useEffect(() => {
    const searchText = searchTextRef.current.value;
    refreshResult(searchText);
  }, [sortMethod, filters, refreshResult]);

  return (
    <div className="product-search">
      <div className="product-search__header">
        <span className="product-search__header__title">
          Search in Products
        </span>
        <img
          src={cross}
          className="product-search__header__close-btn"
          alt="close"
          onClick={() => modal.closeModal()}
        />
      </div>
      <div className="product-search__text">
        <img src={search} alt="search" />
        <input
          type="text"
          name="search"
          className="product-search__text__input"
          placeholder="Search..."
          ref={searchTextRef}
          autoComplete="off"
        />
      </div>

      <div className="product-search__tool-box">
        <span>
          <input
            type="checkbox"
            name="withOffer"
            onChange={handleFilterChange}
          />
          <span>With Offer</span>
        </span>
        <span>
          <input
            type="checkbox"
            name="availableInStock"
            onChange={handleFilterChange}
          />
          <label>Available In Stock</label>
        </span>
        <span>
          <select name="sort" onChange={handleSortChange}>
            <option value="none">Don't Sort</option>
            <option value="priceAsc">Price Acsending</option>
            <option value="priceDesc">Price Decsending</option>
            <option value="alphAsc">Alphabet Acsending</option>
            <option value="alphDesc">Alphabet Decsending</option>
            <option value="rateAsc">Rate Acsending</option>
            <option value="rateDesc">Rate Decsending</option>
          </select>
        </span>
      </div>
      <div className="product-search__result">
        <div className="product-search__result__item-count">
          {result.length} items found
        </div>
        <div className="product-search__result__list">
          {result.map((item) => (
            <div
              key={`search-result-${item.id}`}
              className="product-search__result__list__item"
            >
              <img
                src={`/products/P-${item.id}/media/i1-64.jpg`}
                alt="some"
                className="product-search__result__list__item__thumb"
              />
              <div className="product-search__result__list__item__desc">
                <div className="product-search__result__list__item__desc__name">
                  {item.title}
                </div>
                <div className="product-search__result__list__item__desc__desc">
                  {item.description}
                </div>
                <div className="product-search__result__list__item__desc__price">
                  {item.availableInStock && (
                    <>
                      <span>${item.offerPrice}</span>
                      {item.off !== 0 && (
                        <>
                          <span>${item.price}</span>
                          <span>{item.off * 100}%</span>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
