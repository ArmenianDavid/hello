import React from "react";
import PropTypes from "prop-types";
// components
import "./Pagination.css";
// material ui
import { Pagination as MaterialUiPagination } from "@material-ui/lab";

function Pagination({ totalPages, handlePaginationChange }) {
    return (
        <div className="pagination-section">
            <div>
                <MaterialUiPagination
                    count={totalPages}
                    onChange={handlePaginationChange}
                    shape="rounded"
                    variant="outlined"
                />
            </div>
        </div>
    );
}

Pagination.propTypes = {
    handlePaginationChange: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
};

export default Pagination;
