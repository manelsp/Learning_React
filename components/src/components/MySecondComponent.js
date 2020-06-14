import React, {Component} from 'react';

//components import
import StaticComponent from './StaticComponent'; 

class MySecondComponent extends Component {
    render(){
        return(
            <div className='mySecondComponent'>
                <h4>This is the second component</h4>
                <StaticComponent/>
            </div>
        );
    }
}

export default MySecondComponent; 