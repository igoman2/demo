import React, { useEffect, useState } from "react";
import Background from "./Background";
import { useLocation } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";
const Layout = (props) => {
    const url = useLocation();
    useEffect(() => {}, [url]);

    return url.pathname === "/" ? (
        <>
            <Header className={props.className} />
            <div className="layout">{props.children}</div>
        </>
    ) : (
        <Background>
            <Header className={props.className} />
            <div className="layout">{props.children}</div>
        </Background>
    );
};

export default Layout;
