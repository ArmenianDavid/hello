import React, {useEffect, useState} from "react";
// components
import "./App.css";
import animeData from "./data/animeData";
import movieData from "./data/movieData";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Title from "./Components/Title/Title";

const HEADER_TITLES = ["Guess the anime", "Guess the movie"];
const quizzes = [animeData , movieData];

const App = () => {
    const [quiz , setQuiz] = useState(1);
    const [paginationData, setPaginationData] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [checkedAnswers, setCheckedAnswers] = useState([]);
    const [points, setPoints] = useState(0);
    let result = 0;

    const chooseQuiz = (quiz) => {
      setQuiz(quiz);
      setPoints(0);
    };

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

    const changePaginationData = () => {
       const paginationData = quizzes[quiz].map((item, index) => {
          const foundAnswer = checkedAnswers.find((answer) => {
                return answer.questionId === item.id
            });
          if(foundAnswer){
              const correct = item.answers.find((item) => item.id === foundAnswer.answerId).correct;
              return {'correct': correct, 'pageNumber': index + 1}
          }
            return {'correct': false, 'pageNumber': index + 1}
        });
        setPaginationData(paginationData);
    };

    useEffect(() => {
        changePaginationData();
    },[checkedAnswers]);


    const handleSubmit = () => {
        setIsSubmitted(true);
        checkedAnswers.forEach((checkedAnswer) => {
            const question = quizzes[quiz].find(
                (question) => question.id === checkedAnswer.questionId
            );
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
            <Header chooseQuiz={chooseQuiz} />
            <div>
                <Title title={HEADER_TITLES[quiz]}/>
                <List
                    data={quizzes[quiz]}
                    checkedAnswersByUser={checkedAnswers}
                    paginationData={paginationData}
                    getCheckedAnswers={getCheckedAnswers}
                    handleSubmit={handleSubmit}
                    points={points}
                    isSubmitted={isSubmitted}
                />
            </div>
        </div>
    );
};

export default App;
