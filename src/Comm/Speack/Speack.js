import React from 'react'
import array from './Array'
import File from './file'

const Speacks = () =>{
   
const conversation = array.map( obj => <File  key={obj.id} id={obj.id} answer={obj.answer} question={obj.question}/>  )

   return (
      <div>
          {conversation}
      </div>
   )
}

export default Speacks