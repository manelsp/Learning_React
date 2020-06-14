import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//components import
import MyComponent from './components/MyComponent'
import MySecondComponent from './components/MySecondComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className="components">
          <MyComponent></MyComponent>
          <MySecondComponent></MySecondComponent>
        </section>
      </header>
    </div>
  );
}

export default App;
