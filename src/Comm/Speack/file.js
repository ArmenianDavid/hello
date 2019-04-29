import React from 'react'

const File = (props) =>{
    return(
      <div>
        <h2> id : {props.id}</h2>
        <h2> Question : {props.question}</h2>
        <h3> Answer : {props.answer} </h3>
      </div>
    )
}

export default File