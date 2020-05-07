import React from "react";
import PropTypes from "prop-types";

import { Pagination as MaterialUiPagination } from "@material-ui/lab";

function Pagination({ totalPages, handlePaginationChange }) {
    return (
        <div className="paginationSection">
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
