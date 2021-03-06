import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Modals from "./containers/Modals/Modals";
import Product from "./containers/Product/Product";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import Footer from "./containers/Footer/Footer";
import { useDispatch } from "react-redux";
import {
  fetchAllProducts,
  useProductsState,
} from "./features/product/productSlice";

function App() {
  const productsState = useProductsState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (productsState === "idle" || productsState === "pending") {
    return <div>loading products. please wait ...</div>;
  }
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </main>
      <Footer />
      <Modals />
    </>
  );
}

export default App;
