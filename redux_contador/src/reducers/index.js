import {INCREMENTAR, DECREMENTAR, RESET} from '../actions/action-types';

const initialState = {
    contador: 0
}

function rootReducer (state = initialState, action) {

    if (action.type === INCREMENTAR) {
        return {
            contador: state.contador + 1
        } 
    }
    else if (action.type === DECREMENTAR) {
        return {
            contador:state.contador - action.payload
        }
    }
    else if (action.type === RESET){
        return {
            contador: 0
        }
    }
    
    return state; 
}

export default rootReducer; 