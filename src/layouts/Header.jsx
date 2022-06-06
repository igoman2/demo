import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Menu from "./Menu";
const Header = () => {
    return (
        <>
            <div className="header-wrapper">
                <div>오픈닥터</div>
                <div>지역 분석 리포트</div>
            </div>
            <Menu />
        </>
    );
};

export default Header;
