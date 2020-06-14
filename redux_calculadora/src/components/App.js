import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import Calculator from './Calculator'; 

class App extends Component {
    render () {
        return (
            <Provider store = {store}>
                <Calculator/>
            </Provider>
        );
    }
}

export default App; 