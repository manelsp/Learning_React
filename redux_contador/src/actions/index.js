import {INCREMENTAR, DECREMENTAR, RESET} from './action-types'; 

export function incrementar() {
    return  {type: INCREMENTAR}//, payload: payload}
}

export function decrementar(payload) {
    return {type: DECREMENTAR, payload: payload}
} 

export function reset(){
    return {type: RESET}
}