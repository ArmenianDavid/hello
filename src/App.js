import React, { useState } from "react";
// components
import "./App.css";
import data from "./Components/data";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";

const HEADER_TITLE_TEXT = "Գուշակիր անիմեն ընդամենը 1 նկարով";

const App = () => {
    const [checkedAnswers, setCheckedAnswers] = useState([]);
    const [points, setPoints] = useState(0);
    let result = 0;

    const getCheckedAnswers = (questionId, answerId) => {
        if (checkedAnswers.some((answer) => answer.questionId === questionId)) {
            const newCheckedAnswers = checkedAnswers.map((item) =>
                item.questionId === questionId
                    ? {
                          ...item,
                          answerId,
                      }
                    : item
            );

            setCheckedAnswers(newCheckedAnswers);
        } else {
            setCheckedAnswers([
                ...checkedAnswers,
                {
                    answerId,
                    questionId,
                },
            ]);
        }
    };

    const handleSubmit = () => {
        checkedAnswers.forEach((checkedAnswer) => {
            const question = data.find(
                (question) => question.id === checkedAnswer.questionId
            );
            console.log(question);
            if (question) {
                const chosenAnswer = question.answers.find(
                    (answer) => answer.id === checkedAnswer.answerId
                );
                if (chosenAnswer.correct) {
                    result += 1;
                    setPoints(result);
                }
            }
        });
    };

    return (
        <div className="container">
            <Header title={HEADER_TITLE_TEXT} />

            <List
                data={data}
                getCheckedAnswers={getCheckedAnswers}
                handleSubmit={handleSubmit}
                points={points}
            />
        </div>
    );
};

export default App;
