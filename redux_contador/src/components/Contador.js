import React from 'react'; 
import { connect } from 'react-redux';
import {Component} from 'react'; 
import { incrementar, decrementar, reset } from "../actions";

const mapPropsToState = state => {
    return {contador: state.contador}
}

const mapDispatchersToState = {
    incrementar,
    decrementar,
    reset
}

class ContadorConectado extends Component {

    incrementar = () => {
        this.props.incrementar();
    }

    decrementar = () => {
        this.props.decrementar(3);
    } 

    reset = () => {
        this.props.reset();
    }

    render(){
        return(
            <div>
                <h4> Contador: {this.props.contador} </h4>
                <div>
                    <button onClick={this.incrementar}>+</button>
                    <button onClick={this.reset}>RESET</button>
                    <button onClick={this.decrementar}>-</button>
                </div>
            </div>
        )
    }
}

const Contador = connect(mapPropsToState, mapDispatchersToState)(ContadorConectado);

export default Contador; 