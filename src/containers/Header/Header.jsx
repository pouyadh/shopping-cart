import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.scss";

const Progressbar = () => {
  const queryClinet = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(queryClinet.isFetching() > 0);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [queryClinet]);
  return <div className="app__progressbar">{isLoading && <div />}</div>;
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
