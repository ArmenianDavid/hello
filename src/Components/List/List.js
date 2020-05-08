import React, { useState } from "react";
// components
import "./List.css";
import SingleQuestion from "../singleQuestion/SingleQuestion";
import Pagination from "../Pagination/Pagination";
// material ui
import { Button, Card } from "@material-ui/core";

const QUESTIONS_PER_PAGE = 1;

const List = ({ data, getCheckedAnswers }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastQuestion = currentPage * QUESTIONS_PER_PAGE;
    const indexOfFirstQuestion = indexOfLastQuestion - QUESTIONS_PER_PAGE;
    const totalPages = Math.ceil(data.length / QUESTIONS_PER_PAGE);
    const currentQuerstions = data.slice(
        indexOfFirstQuestion,
        indexOfLastQuestion
    );
    const isLastQuestion = currentPage === totalPages;

    const handlePaginationChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="list-container">
            <Card>
                <div>
                    {currentQuerstions.map((item) => {
                        return (
                            <SingleQuestion
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                answers={item.answers}
                                getCheckedAnswers={getCheckedAnswers}
                            />
                        );
                    })}
                </div>
                {isLastQuestion ? (
                    <div className="submitButton-container">
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Submit
                        </Button>
                    </div>
                ) : null}
                <div>
                    <Pagination
                        totalPages={totalPages}
                        handlePaginationChange={handlePaginationChange}
                    />
                </div>
            </Card>
        </div>
    );
};
export default List;
