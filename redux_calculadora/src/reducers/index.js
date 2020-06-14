import {SUM, SUBTRACT, MULTIPLY, DIVIDE} from '../actions/action-type';

const initialState = {
    result: 0
}

function rootReducer (state = initialState, action){

    if (action.type === SUM) {
        return {
            result: action.num1 + action.num2
        }
    }
    else if (action.type === SUBTRACT) {
        return {
            result: action.num1 - action.num2
        }
    }
    else if (action.type === MULTIPLY) {
        return {
            result: action.num1 * action.num2
        }
    }
    else if (action.type === DIVIDE) {
        return {
            result: action.num1 / action.num2
        }
    }   
 
    return state; 
}

export default rootReducer; 