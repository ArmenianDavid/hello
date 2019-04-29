import React from 'react'

const Pagination = (props) =>{
  return(
    <div>
      <button
        onClick={()=> props.handleChangePhoto('prev')}
        disabled={props.photo === 0}
           > &larr; </button>

       <button
           onClick={()=> props.handleChangePhoto('next')}
           disabled={props.photo === 4}
           > &rarr; </button>
    </div>
  )
}

export default Pagination