import React from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWorld(name, age){
  var presentation = (
    <div>
      <h2> Helo World {name}</h2>
      <h3>I'm {age} years old </h3>
    </div>
  );

  return presentation; 
}


function App() {
  var name = "MyName"; 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {HelloWorld(name, 20)}
        </p>
      </header>
    </div>
  );
}

export default App;
