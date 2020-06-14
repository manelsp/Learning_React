import React, { Component } from 'react';

//components
import Table from './components/Table';
import Input from './components/Input';

class App extends Component {
    render(){
        return(
            <div className="App">
                <Table/>
                <Input/>
            </div>
        );
    }
}

export default App;