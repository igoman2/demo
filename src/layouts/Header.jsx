import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Menu from "./Menu";
const Header = (props) => {
  return (
    <>
      <div className="header-layout">
        <div className={`header-wrapper ${props.className}`}>
          <div>오픈닥터</div>
          <div>지역 분석 리포트</div>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Header;
