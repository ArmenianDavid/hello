import uuid from "react-uuid";
// components
import anime1 from "./Images/anime1.jpg";
import anime2 from "./Images/anime2.jpg";
import anime3 from "./Images/anime3.jpg";
import anime4 from "./Images/anime4.png";
import anime5 from "./Images/anime5.png";

const data = [
    {
        id: uuid(),
        img: anime1,
        answers: [
            {
                id: uuid(),
                title: "No game no life",
            },
            {
                id: uuid(),
                title: "Charlotta",
            },
            {
                id: uuid(),
                title: "Yuri!!! on Ice",
            },
            {
                id: uuid(),
                title: "Your name",
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
            },
            {
                id: uuid(),
                title: "Eve no Jikan",
            },
            {
                id: uuid(),
                title: "Mob Psycho 100",
            },
            {
                id: uuid(),
                title: "Gintama",
            },
        ],
    },
    {
        id: uuid(),
        img: anime3,
        answers: [
            {
                id: uuid(),
                title: "Run with the Wind",
            },
            {
                id: uuid(),
                title: "Eve no Jikan",
            },
            {
                id: uuid(),
                title: "Mob Psycho 100",
            },
            {
                id: uuid(),
                title: "Gintama",
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
            },
            {
                id: uuid(),
                title: "One punch man",
            },
            {
                id: uuid(),
                title: "7 deadly sins",
            },
            {
                id: uuid(),
                title:
                    "JoJo’s Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
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
            },
            {
                id: uuid(),
                title: 'Miss Kobayashi"s Dragon Maid',
            },
            {
                id: uuid(),
                title: "Shelter",
            },
            {
                id: uuid(),
                title: "Out of Sight",
            },
        ],
    },
];

export default data;
