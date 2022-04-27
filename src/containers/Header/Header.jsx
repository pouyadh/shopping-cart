import React from "react";
import { useIsFetching } from "react-query";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.scss";

const Progressbar = () => {
  const isFetching = useIsFetching();
  return <div className="app__progressbar">{isFetching && <div />}</div>;
};

const Header = () => {
  return (
    <header>
      <Progressbar />
      <Navbar />
    </header>
  );
};

export default Header;
