import React from 'react'


const Question = (props) =>{

  return(
    <div> 
        <p> 
          <input 
              type='radio' 
              name={props.name} 
              value={props.title1} 
              style={{width : '20px', height : '20px'}} 
              className='answerInput' />
          <span className='animeNames' > {props.title1} </span>
           </p>
           
           <p> 
          <input 
              type='radio' 
              name={props.name} 
              value={props.title2} 
              style={{width : '20px', height : '20px'}} 
              className='answerInput' />
          <span className='animeNames'> {props.title2} </span>
           </p>
           
           <p> 
          <input 
              type='radio' 
              name={props.name} 
              value={props.title3} 
              style={{width : '20px', height : '20px'}} 
              className='answerInput' />
          <span className='animeNames'> {props.title3} </span>
           </p>

           <p> 
          <input 
              type='radio' 
              name={props.name}
              value={props.title4} 
              style={{width : '20px', height : '20px'}} 
              className='answerInput' />
          <span className='animeNames'> {props.title4} </span>
           </p>
       </div>  
  )
}

export default Question