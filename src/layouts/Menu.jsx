import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
    return (
        <div className="menu">
            <Link to="introduce">개요</Link>
            <Link to="compete">시장분석</Link>
            <Link to="market">경쟁분석</Link>
            <Link to="user-report">고객분석</Link>
        </div>
    );
};

export default Menu;
