import React from 'react'

const Pagination = (props) =>{
  return(
    <div>
      <button
        onClick={()=> props.handleChangePhoto('prev')}
        disabled={true}
           > &larr; </button>

       <button
           onClick={()=> props.handleChangePhoto('next')}
           disabled={props.question === 4}
           > &rarr; </button>
    </div>
  )
}

export default Pagination