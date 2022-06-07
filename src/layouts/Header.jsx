import React, { useEffect, useState } from "react";
import "./Header.css";
import WhiteLogo from "../assets/white-logo.png";
import ColorLogo from "../assets/color-logo.png";
import { Link } from "react-router-dom";

import Menu from "./Menu";
const Header = (props) => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";
  const style = { color: props.isWhite ? "white" : "black" };
  return (
    <div className={`header-layout ${cls}`}>
      <div className={`header-wrapper ${props.className}`}>
        <div>
          <Link to="/">
            <img src={props.isWhite ? WhiteLogo : ColorLogo} alt="" />
          </Link>
        </div>
        <div style={style}>지역 분석 리포트</div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
