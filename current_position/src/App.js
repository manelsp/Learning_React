import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Geolocator from './Components/Geolocator';

class App extends Component {
  render(){
    return(
      <div className ='App'>
        <h2>Your position</h2>
        <Geolocator></Geolocator>
      </div> 
    );
  }
}

export default App;
