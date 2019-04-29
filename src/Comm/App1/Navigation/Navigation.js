import React from 'react'
import './Navigation.css'


const Navigation = (props) =>{
  return (
    <div  className='navigationBar'>
         <ul className ='photoUl'><b> Photo</b>
           <li onClick={()=> props.showNaruto() }>Naruto</li>
           <li>Loofy</li>
           <li>Ase</li>
         </ul>

         <ul className='musicUl'><b> Music</b>
           <li>Imran</li>
           <li>Natural</li>
         </ul>
    </div>
  )
}


export default Navigation