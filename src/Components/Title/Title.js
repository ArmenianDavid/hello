import React from "react";
// components
import "./Title.css";

const Header = (props) => {
    return (
        <div className="title">
            <h1 className="title-heading"> {props.title}</h1>
        </div>
    );
};

export default Header;
