import React from 'react'
import Naruto from '../../App/images/Naruto.jpg'
import './Main.css'

class Main extends React.Component{
  constructor(){
    super();
    this.state={
      number : 1,
    }
  }
  showNaruto = () =>{
    this.setState({
      number : this.state.number + 1,
    })
  }

  componentDidMount(){
       console.log('its working')
     
       this.showNaruto()

  }

  render(){
    if(this.state.number == 3){
    return(
      <div className='photoContainer'>
        <img src={Naruto} alt='naruto' className='photo' />
      </div>
     )
   }
    return (
      <div>
        paho
      </div>
    )
  }
}

export default Main