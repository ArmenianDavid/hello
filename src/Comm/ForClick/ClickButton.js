import React from 'react'

const ClickButton = (props) =>{
  return(
    <div>
      <button onClick={()=> props.changePhoto('Naruto') }> Naruto</button>
      <button onClick={()=> props.changePhoto('ase') }> Ase</button>
      <button onClick={()=> props.changePhoto('Goku') }>Goku</button>
    </div>
  )
}

export default ClickButton