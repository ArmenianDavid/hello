import React from 'react'
import Naruto from '../App/images/Naruto.jpg'
import ase from '../App/images/ase.jpg'
import Goku from '../App/images/Goku.png'
import ClickButton from './ClickButton'

class App extends React.Component{
  constructor(){
    super();
     this.state={
       number : 1,
     }
  }

  componentDidMount(){
    this.photo()
     
  }
  changeNumber = () =>{
     this.setState({ number : this.state.number +1})
  }

  photo = () =>{
    if(this.state.number === 1){
      return(<img src={Naruto} alt='naruto' />)
    }else if(this.state.number === 2){
      return(<img src={ase} alt='Ase' />)
    }
  }

  render(){
    return(
      <div>
         <button onClick={()=> this.changeNumber()}
          disabled={this.state.number === 3}> change {this.state.number} </button>
         {this.photo()}
      </div>
    )
  }
}

export default App