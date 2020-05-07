import React, { useState } from "react";
// components
import "./SingleQuestion.css";
// material ui
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SingleQuestion = ({ id, img, answers, getCheckedAnswers }) => {
    // console.log("id", id, "img", img, "answers", answers);

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);

        getCheckedAnswers(id, event.target.value);
    };

    return (
        <div className="question-container">
            <div className="image-container">
                <img src={img} alt="test img" className="image" />
            </div>
            <div>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                >
                    {answers.map(({ id, title }) => {
                        return (
                            <FormControlLabel
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
