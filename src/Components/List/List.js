import React, { useState } from "react";
// components
import "./List.css";
import SingleQuestion from "../singleQuestion/SingleQuestion";
import Pagination from "../Pagination/Pagination";
import TransitionsModal from "../modal/Modal";
// material ui
import { Card } from "@material-ui/core";

const QUESTIONS_PER_PAGE = 1;

const List = ({ data,checkedAnswersByUser, paginationData, getCheckedAnswers, handleSubmit, points, isSubmitted }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastQuestion = currentPage * QUESTIONS_PER_PAGE;
    const indexOfFirstQuestion = indexOfLastQuestion - QUESTIONS_PER_PAGE;
    const totalPages = Math.ceil(data.length / QUESTIONS_PER_PAGE);
    const currentQuerstions = data.slice(
        indexOfFirstQuestion,
        indexOfLastQuestion
    );
    const isLastQuestion = currentPage === totalPages;

    const handlePaginationChange = (event) => {
        setCurrentPage(Number(event.target.innerText));
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
                                checkedAnswersByUser={checkedAnswersByUser}
                                answers={item.answers}
                                getCheckedAnswers={getCheckedAnswers}
                                isSubmitted={isSubmitted}
                            />
                        );
                    })}
                </div>
                {isLastQuestion ? (
                    <div className="submitButton-container">
                        <TransitionsModal
                            handleSubmit={handleSubmit}
                            points={points}
                        />
                    </div>
                ) : null}
                <div>
                    <Pagination
                        paginationData={paginationData}
                        handlePaginationChange={handlePaginationChange}
                        isSubmitted={isSubmitted}
                    />
                </div>
            </Card>
        </div>
    );
};
export default List;
