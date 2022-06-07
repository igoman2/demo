import React, { useEffect, useState } from "react";
import Background from "./Background";
import { useLocation } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";
const Layout = (props) => {
  const url = useLocation();
  const [isInLandingFrame, setIsInLandingFrame] = useState(true);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {}, [url]);
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setIsInLandingFrame(height > moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return url.pathname === "/" ? (
    <>
      <Header className={props.className} isWhite={false} />
      <div className="layout">{props.children}</div>
    </>
  ) : (
    <Background>
      <Header className={props.className} isWhite={isInLandingFrame} />
      <div className="layout">{props.children}</div>
    </Background>
  );
};

export default Layout;
