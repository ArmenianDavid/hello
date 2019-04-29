import React from 'react'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Main from './Main/Main'
import './App.css'

const App = () =>{
  return (
    <div>
      <Header />
      <div className='container'>
      <Navigation   />
      <Main    />
      </div>
    </div>
  )
}


export default App