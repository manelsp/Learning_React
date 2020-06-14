import React, {Component} from 'react';

class MyComponent extends Component {
    render(){
        let object = {
            name: 'MyComponent', 
            letters: ['a', 'b'],
            number: 10
        }

        return(
            <div className="myComponent">
                <h2>{object.name}</h2>
                <h3> Description </h3>
                <hr/>
                <p>{'number: ' + object.number}</p>
                <ul>
                {
                    object.letters.map((letter, i) => {
                        return(
                            <li key={i}>
                                {letter}
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

export default MyComponent; 