import React from 'react'
import './List.css'
import Anime from './Anime'
import Pagination from './Pagination'


class List extends React.Component{
  constructor(){
    super();
    this.state={
      loading : false,
      question : 1,
      points : 0,
      notChecked : 'false',
    }
  }

  componentDidMount(){
    this.handleChangePhoto();
  }
  

  handleChangePhoto  = (direction) =>{
     let nextQuestion = this.state.question

     nextQuestion = direction === 'next' ? nextQuestion + 1 : nextQuestion - 1;


     this.setState({ question : nextQuestion,}, ()=> this.handleChangePhoto)
  }

  handleChange = (event) =>{

      
       const {id,value} = event.target
       if(id ==='0' && value ==='Charlotta'){
          this.setState({points : this.state.points + 1})
          alert('Yes you are right and you gain 1 pont')
           }else if(id ==='1' && value === 'Gintama'){
              this.setState({points : this.state.points + 1})
              alert('Yes you are right and you gain 1 pont')
              }else if(id ==='2' && value === 'One punch man'){
                this.setState({points : this.state.points + 1})
                alert('Yes you are right and you gain 1 pont')
                }else if(id ==='3' && value === '7 deadly sins'){
                  this.setState({points : this.state.points + 1})
                  alert('Yes you are right and you gain 1 pont')
                   }else if(id ==='4' && value === 'Miss Kobayashi"s Dragon Maid'){
                    this.setState({points : this.state.points + 1})
                  alert('Yes you are right and you gain 1 pont')}
                    console.log(this.state.points,id,value)
                    


  }

  render(){
    return(
      <div className='output'>
          
          <Anime 
          handleChange={this.handleChange} 
          id={this.state.question}
          />
          <h1 style={{color:'red'}}>{this.state.points}</h1> 
          <Pagination 
          handleChangePhoto = {this.handleChangePhoto}
          question = {this.state.question}    
          />

          
      </div>
    )
  }
}

export default List