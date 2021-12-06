import React from "react";
import PropTypes from "prop-types";
// components
import "./Pagination.css";
// material ui

function Pagination({ paginationData, handlePaginationChange, isSubmitted }) {
    return (
        <div className="pagination-section">
            <div>
                {paginationData.map((item, index) => {
                    return <button className={ item.correct && isSubmitted ? "correct-answer" : (!item.correct && isSubmitted) ? "wrong-answer" : ''} key={index} onClick={handlePaginationChange}>{item.pageNumber}</button>
                })}
            </div>
        </div>
    );
}

Pagination.propTypes = {
    handlePaginationChange: PropTypes.func.isRequired,
    paginationData: PropTypes.array.isRequired,
};

export default Pagination;
