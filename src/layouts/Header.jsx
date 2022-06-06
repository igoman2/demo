import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import Menu from "./Menu";
const Header = (props) => {
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;

            console.log(position, moving);
            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const cls = visible ? "visible" : "hidden";
    return (
        <div className={`header-layout ${cls}`}>
            <div className={`header-wrapper ${props.className}`}>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div>지역 분석 리포트</div>
            </div>
            <Menu />
        </div>
    );
};

export default Header;
