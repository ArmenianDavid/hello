import React from 'react'
import './List.css'
import Anime from './Anime'
import Pagination from './Pagination'


class List extends React.Component{
  constructor(){
    super();
    this.state={
      loading : false,
      photo : 1,
      points : 0,
    }
  }

  componentDidMount(){
    this.handleChangePhoto();
  }
  

  handleChangePhoto  = (direction) =>{
     let nextPhoto = this.state.photo

     nextPhoto = direction === 'next' ? nextPhoto + 1 : nextPhoto - 1;

     this.setState({ photo : nextPhoto}, ()=> this.handleChangePhoto)
  }

  render(){
    return(
      <div className='output'>
          
          <Anime  
          id={this.state.photo}
          handleAnswer ={this.handleAnswer}
          />

          <Pagination 
          handleChangePhoto = {this.handleChangePhoto}
          photo = {this.state.photo}    
          />

          {this.state.points}

      </div>
    )
  }
}

export default List