import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Modals from "./containers/Modals/Modals";
import Product from "./containers/Product/Product";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </main>
      <Modals />
    </>
  );
}

export default App;
