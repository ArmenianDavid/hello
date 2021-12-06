import uuid from "react-uuid";
// components
import anime1 from "../Components/Images/anime/anime1.jpg";
import anime2 from "../Components/Images/anime/anime2.jpg";
import anime3 from "../Components/Images/anime/anime3.jpg";
import anime4 from "../Components/Images/anime/anime4.png";
import anime5 from "../Components/Images/anime/anime5.png";

const animeData = [
    {
        id: uuid(),
        img: anime1,
        answers: [
            {
                id: uuid(),
                title: "No game no life",
                correct: false,
            },
            {
                id: uuid(),
                title: "Charlotta",
                correct: true,
            },
            {
                id: uuid(),
                title: "Yuri!!! on Ice",
                correct: false,
            },
            {
                id: uuid(),
                title: "Your name",
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        img: anime2,
        answers: [
            {
                id: uuid(),
                title: "Run with the Wind",
                correct: false,
            },
            {
                id: uuid(),
                title: "Eve no Jikan",
                correct: false,
            },
            {
                id: uuid(),
                title: "Mob Psycho 100",
                correct: false,
            },
            {
                id: uuid(),
                title: "Gintama",
                correct: true,
            },
        ],
    },
    {
        id: uuid(),
        img: anime3,
        answers: [
            {
                id: uuid(),
                title: "One punch man",
                correct: true,
            },
            {
                id: uuid(),
                title: "Eve no Jikan",
                correct: false,
            },
            {
                id: uuid(),
                title: "Run with the Wind",
                correct: false,
            },
            {
                id: uuid(),
                title: "King Artur",
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        img: anime4,
        answers: [
            {
                id: uuid(),
                title: "The Rising of the Axe Hero",
                correct: false,
            },
            {
                id: uuid(),
                title: "One punch man",
                correct: false,
            },
            {
                id: uuid(),
                title: "7 deadly sins",
                correct: true,
            },
            {
                id: uuid(),
                title:
                    "JoJo’s Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        img: anime5,
        answers: [
            {
                id: uuid(),
                title: "Pennywise",
                correct: false,
            },
            {
                id: uuid(),
                title: 'Miss Kobayashi"s Dragon Maid',
                correct: true,
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
