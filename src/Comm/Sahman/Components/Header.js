import React from 'react'
import './Header.css'
import logo from './sahman.png'


const Header = () =>{
  return(
     <div className='headerContainer'>
        <div>
          <img src={logo} alt='logo' className='headerLogo' />
        </div>
        
        <div>
          <span>
             <i style='font-size:24px' class='fas'>&#xf3c5;</i>
              ԼՂՀ Քաշաթաղի շրջ. ք. Բերձոր 5թղ. 78տուն  </span>
          <span></span>
        </div>

        <div className='header'>
          <li className='menuLi'>Մենյու</li>
          <li>Մեր մասին</li>
          <li>Ծառայություններ</li>
          <li>Նկարներ</li>
        </div>
     </div>
  )
}


export default Header