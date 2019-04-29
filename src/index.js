// import React from 'react'
// import ReactDOM from 'react-dom'
// import Naruto from './images/Naruto.jpg'
// import ase from './images/ase.jpg'
// import Loofy from './images/Loofy.jpg'
// import OnePiece from './images/OnePiece.jpg'

// class Container extends React.Component{
//   constructor(){
//     super();
//     this.state ={
//        second : 0,
//        minute : 0,

//     }
//   }

//   timer(){
//      this.setState({ 
//        second : this.state.second + 1
//      })
//      if(this.state.second == 4){
//            this.setState({ 
//               second : 0,
//            })
            
//        }
//      }
  

//   photo = () =>{
     
//     if(this.state.second == 0){
//       return (
//         <div>
//           <img src={Naruto} alt='Naruto' className = 'Naruto'  />
//         </div>
//       )
//     }else if(this.state.second == 1){
//       return(
//         <div>
//           <img src={ase} alt='Ase' className = 'Ase'  />
//         </div> )
      
//     }else if(this.state.second == 2){
//       return(
//         <div>
//           <img src={Loofy} alt='loofy' className = 'Loofy'  />
//         </div> )}else{
//           return(
//             <div>
//               <img src={OnePiece} alt='loofy' className = 'Loofy'  />
//             </div> )
//         }
//   } 
  

//   componentDidMount(){
//     setInterval( () => this.timer() , 1500)
//   }

//   render(){
//     return(
//       <div>
//         Timer {this.state.minute} : {this.state.second}
//         <button onClick={this.photo()}  > SlideShow</button>
//         {this.photo()}
//       </div>
//     )
//   }
// }


// ReactDOM.render( <Container /> , document.getElementById('root') )

// import React from 'react'
// import ReactDOM from 'react-dom'

// const App = () =>{
//    const date = new Date()
//    const hour = date.getHours()
//    let timeOfDay

//    if(hour < 12 ){
//       timeOfDay = 'morning'
//    }else if( hour >= 12 && hour < 17){
//      timeOfDay = 'afternoon'
//    }else(
//      timeOfDay = 'night'
//    )

//    return (
//      <div>
//        Hello. Good {timeOfDay}
//      </div>
//    )
// }

// ReactDOM.render( <App />  , document.getElementById('root') )


// import React from 'react'
// import ReactDOM from 'react-dom'

// const Hello = () =>{
//     const date = new Date()
//     const hours = date.getHours()
//     console.log(hours)
//     let timeOfDay
//     const styles={
//          color : 'blue' ,
//          fontSize : 60,
//     } 

//     if(hours < 12){
//       timeOfDay = 'morning'
//     }else if(hours >= 12 && hours < 17){
//       timeOfDay = 'afternoon'
//       styles.backgroundColor = 'red'
//     }else{
//       timeOfDay = 'night'
//     }


//     return(
//       <div  style={styles}>
//        now is  {timeOfDay}
//       </div>
//     )
// }




// ReactDOM.render( <Hello /> , document.getElementById('root') )

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header'
import List from './Components/List'

const App = () =>{
  return(
    <div>
         <Header />

         <List />

    </div>
  )
}

ReactDOM.render( <App /> , document.getElementById('root'))