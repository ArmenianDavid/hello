import React from 'react'
import './Anime.css'
import anime1 from './Images/anime1.jpg'
import anime2 from './Images/anime2.jpg'
import anime3 from './Images/anime3.jpg'
import anime4 from './Images/anime4.png'
import anime5 from './Images/anime5.png'
import Question from './Config/Config';

const Anime = (props) =>{
  const array = [
         {
       number : 1,    
       img : <img src={anime1} alt='anime1' />,
       question : <Question
                   handleChange={props.handleChange}
                   name={anime1}
                   id={props.id}
                   title1='No game no life' 
                   title2='Charlotta'
                   title3='Yuri!!! on Ice'
                   title4='Your name'/>
    },
     { number : 2, 
       img : <img src={anime2} alt='anime2' />,
       question : <Question
                    handleChange={props.handleChange}
                    name={anime2}
                    id={props.id} 
                    title1='Run with the Wind' 
                    title2='Eve no Jikan'
                    title3='Mob Psycho 100'
                    title4='Gintama'/>
    },
     {
      number : 3, 
     img : <img src={anime3} alt='anime3' />,
     question : <Question
                    handleChange={props.handleChange}
                    name={anime3}
                    id={props.id}
                    title1='Super king' 
                    title2='One punch man'
                    title3='One piece'
                    title4='Gintama' /> 
      },
     { 
      number : 4,   
     img : <img src={anime4} alt='anime4' />,
     question : <Question
                    handleChange={props.handleChange}
                    name={anime4}
                    id={props.id}
                    title1='The Rising of the Axe Hero' 
                    title2='One punch man'
                    title3='7 deadly sins'
                    title4='JoJo’s Bizarre Adventure: Stardust Crusaders - Battle in Egypt' />
     },
     {
     number : 5,  
     img : <img src={anime5} alt='anime5' />,
     question : <Question 
                    handleChange={props.handleChange}
                    name={anime5}
                    id={props.id}
                    title1='Pennywise' 
                    title2='Miss Kobayashi"s Dragon Maid'
                    title3='Shelter'
                    title4='Out of Sight' />
      }
  ]
  
  return(
    <div>
      {array[props.id].img}
      {array[props.id].question}
    </div>
  )

}

export default Anime