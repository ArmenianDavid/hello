import React from "react";
// components
import "./Header.css";

const Header = ({chooseQuiz}) => {
    const headers = [{title: 'anime'} , {title: 'movie'}];
    return (
        <div className="header-container">
            <h1>Ընտրիր վիկտորինաի ոլորտը</h1>
            <div className="button-container">
                {headers.map((item, index) => {
                    return (
                        <button  onClick={() => chooseQuiz(index)} className="header-btn">{item.title}</button>
                    )
                })}
            </div>
        </div>
    )
};

export default Header;
