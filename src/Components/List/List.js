import React from "react";
// components
import "./List.css";
import SingleQuestion from "../singleQuestion/SingleQuestion";

const List = ({ data, getCheckedAnswers }) => {
    return (
        <div className="list-container">
            {data.map((item) => {
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
    );
};
export default List;
