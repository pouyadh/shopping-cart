import React, { useEffect, useRef, useState } from "react";
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
  const headerRef = useRef();
  const fillerRef = useRef();
  useEffect(() => {
    const headerBoundings = headerRef.current.getBoundingClientRect();
    fillerRef.current.style.height = `${headerBoundings.height}px`;
  }, []);
  return (
    <>
      <header ref={headerRef}>
        <Progressbar />
        <Navbar />
      </header>
      <div ref={fillerRef}></div>
    </>
  );
};

export default Header;
