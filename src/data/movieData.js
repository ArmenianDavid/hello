import uuid from "react-uuid";
// components
import movie1 from "../Components/Images/movies/movie1.jpg";
import movie2 from "../Components/Images/movies/movie2.jpg";
import movie3 from "../Components/Images/movies/movie3.jpg";
import movie4 from "../Components/Images/movies/movie4.jpg";
import movie5 from "../Components/Images/movies/movie5.jpg";

const animeData = [
    {
        id: uuid(),
        img: movie1,
        answers: [
            {
                id: uuid(),
                title: "CUSP",
                correct: false,
            },
            {
                id: uuid(),
                title: "I was a simple man",
                correct: false,
            },
            {
                id: uuid(),
                title: "Joker",
                correct: true,
            },
            {
                id: uuid(),
                title: "There Will Be Blood",
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        img: movie2,
        answers: [
            {
                id: uuid(),
                title: "Underwater",
                correct: false,
            },
            {
                id: uuid(),
                title: "Robin Hood",
                correct: false,
            },
            {
                id: uuid(),
                title: "Vikings",
                correct: true,
            },
            {
                id: uuid(),
                title: "Pathfinder",
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        img: movie3,
        answers: [
            {
                id: uuid(),
                title: "Fury",
                correct: false,
            },
            {
                id: uuid(),
                title: "1917",
                correct: true,
            },
            {
                id: uuid(),
                title: "Dunkirk",
                correct: false,
            },
            {
                id: uuid(),
                title: "Stalingrad",
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        img: movie4,
        answers: [
            {
                id: uuid(),
                title: "Hot shots",
                correct: false,
            },
            {
                id: uuid(),
                title: "2 and a half men",
                correct: false,
            },
            {
                id: uuid(),
                title: "scary movie",
                correct: true,
            },
            {
                id: uuid(),
                title: "The hero",
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        img: movie5,
        answers: [
            {
                id: uuid(),
                title: "Watchmen",
                correct: true,
            },
            {
                id: uuid(),
                title: 'Smile',
                correct: false,
            },
            {
                id: uuid(),
                title: "Shelter",
                correct: false,
            },
            {
                id: uuid(),
                title: "Out of Sight",
                correct: false,
            },
        ],
    },
];

export default animeData;
