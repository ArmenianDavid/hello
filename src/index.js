
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header'
import List from './Components/List'
import './Index.css';

const App = () =>{
  return(
    <div>
         <Header />

         <List />

    </div>
  )
}

ReactDOM.render( <App /> , document.getElementById('root'))


