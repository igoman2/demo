import React from "react";
import Background from "./Background";
import "./Layout.css";
const Layout = (props) => {
    return (
        <Background>
            <div className="layout">{props.children}</div>
        </Background>
    );
};

export default Layout;
