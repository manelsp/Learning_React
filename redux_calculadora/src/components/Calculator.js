import React, {Component} from 'react';
import {sum, subtract, multiply, divide} from '../actions'; 
import {connect} from 'react-redux'; 
import "../css/style.css";

const mapPropsToState = state => {
    return {result: state.result}
}

const mapDispatchersToState = {
    sum,
    subtract,
    multiply,
    divide
}

class ConnectedCalculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            num1: 0, num2: 0, result: 0
        }
    }

    handleChange=(event)=> {
        this.setState({ [event.target.id]: event.target.value });
    }

    sum = () => {
        this.props.sum (parseFloat(this.state.num1), parseFloat(this.state.num2));
    }

    subtract = () => {
        this.props.subtract (parseFloat(this.state.num1), parseFloat(this.state.num2));
    }

    multiply = () => {
        this.props.multiply (parseFloat(this.state.num1), parseFloat(this.state.num2));
    }

    divide = () => {
        this.props.divide (parseFloat(this.state.num1), parseFloat(this.state.num2));
    }

    render(){
        return(
            <div className = "Calculator">
                <h2>Calculator</h2>
                <div>
                    <p>Number 1: <input type="number" id="num1" value={this.state.num1} onChange={this.handleChange}></input></p>
                    <p>Number 2: <input type="number" id="num2" value={this.state.num2} onChange={this.handleChange}></input></p>
                </div>
                <div className = "Buttons">
                    <button className ="Button" onClick = {this.sum}>+</button>
                    <button className ="Button" onClick = {this.subtract}>-</button>
                    <button className ="Button" onClick = {this.multiply}>x</button>  
                    <button className ="Button" onClick = {this.divide}>÷</button>
                </div>
                <h3>Result: {this.props.result}</h3>
            </div>
        );
    }
}

const Calculator = connect (mapPropsToState, mapDispatchersToState) (ConnectedCalculator);

export default Calculator; 