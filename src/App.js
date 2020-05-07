import React, { useState } from "react";
// components
import "./App.css";
import data from "./Components/data";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";

const HEADER_TITLE_TEXT = "Գուշակիր անիմեն ընդամենը 1 նկարով";

const App = () => {
    const [checkedAnswers, setCheckedAnswers] = useState([]);

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

    console.log(checkedAnswers);
    return (
        <div className="container">
            <Header title={HEADER_TITLE_TEXT} />

            <List data={data} getCheckedAnswers={getCheckedAnswers} />
        </div>
    );
};

export default App;
