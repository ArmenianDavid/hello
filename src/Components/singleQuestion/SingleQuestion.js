import React, { useState } from "react";
// components
import "./SingleQuestion.css";
// material ui
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SingleQuestion = ({ id, img, checkedAnswersByUser, answers, getCheckedAnswers, isSubmitted }) => {
    let isAnswerAlreadyChoosen = false;
    let previouslyCeckedAnswerId = '';
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);

        getCheckedAnswers(id, event.target.value);
    };

    if(checkedAnswersByUser){
        const changedQuestion = checkedAnswersByUser.find((item) => item.questionId === id);
        if(changedQuestion) {
            isAnswerAlreadyChoosen = true;
            previouslyCeckedAnswerId = changedQuestion.answerId
        }
    }

    return (
        <div className="question-container">
            <div className="image-container">
                <img src={img} alt="test img" className="image" />
            </div>
            <div>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={isAnswerAlreadyChoosen ? previouslyCeckedAnswerId : value}
                    onChange={handleChange}
                >
                    {console.log(answers)}
                    {answers.map(({ id, title, correct }) => {
                        return (
                            <FormControlLabel
                                className={ isSubmitted && previouslyCeckedAnswerId === id && correct ? "correct-answer" :
                                            isSubmitted && previouslyCeckedAnswerId === id && !correct ? "wrong-answer" : ""}
                                key={id}
                                value={id}
                                control={<Radio />}
                                label={title}
                            />
                        );
                    })}
                </RadioGroup>
            </div>
        </div>
    );
};

export default SingleQuestion;
