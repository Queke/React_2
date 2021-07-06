import React from 'react';
import './App.css';

/* function Hellowworld (props) {  // esta es una función que crea un componente div
  return (
    <div id='hello'>
      {props.mytext}
      </div>
  )
} */

// const App = () => <div>This is other component: <Hellowworld/> </div> 


// class App extends React.Component {     // una clase creando un componente React
//   render() {
//     return  <div> This other componnet: <Hellowworld/> </div>

//   }
// }


class Helloworld extends React.Component { // esta es una clase donde estoy modificando el contenido

  state = {
    show: true  
  }

  toggleshow = () =>{
    this.setState({show: !this.state.show})
  }
  render(){
    if(this.state.show){
      return (
        <div id='hello'>
          {this.props.mytext}
          <button onClick={this.toggleshow}>Ocultar</button> 
        </div>
      )
    }else{
      return <h1>
        No hay elementos
        <button onclick={this.toggleshow}>Mostrar</button>
        </h1>
    }
  }
}


function App(){     // Esto esl el "html" que se mestra al usuario
  return (
    <div> this is my component:
       <Helloworld mytext='Hola Queke'/> 
       <Helloworld mytext='Hola UwU'/> 
       <Helloworld mytext='Hola Nicky'/> 
       </div>
  )
}
export default App;
