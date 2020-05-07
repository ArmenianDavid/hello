import React from "react";

const Header = (props) => {
    return (
        <div className="Header">
            <h1 className="Header-heading"> {props.title}</h1>
        </div>
    );
};

export default Header;
