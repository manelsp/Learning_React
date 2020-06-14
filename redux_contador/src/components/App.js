import React from 'react'; 
import {Component} from 'react';
import Contador from './Contador';
import {Provider} from 'react-redux';
import store from '../store';

class App extends Component {
    render() { 
        return (  
            <Provider store={store}>
                <Contador/>
            </Provider>
        );
    }
}
 
export default App;