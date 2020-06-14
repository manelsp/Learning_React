import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//components
import People from './Components/People';

class App extends Component {
  render(){
    return(
      <div className ="App">
        <People/>
      </div> 
    );
  }
}

export default App;
