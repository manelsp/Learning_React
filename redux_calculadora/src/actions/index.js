import {SUM, SUBTRACT, MULTIPLY, DIVIDE} from './action-type'; 

export function sum (num1, num2) {
    return {type: SUM, num1, num2}
}

export function subtract (num1, num2) {
    return {type: SUBTRACT, num1, num2}
}

export function multiply (num1, num2) {
    return {type: MULTIPLY, num1, num2}
}

export function divide (num1, num2) {
    return {type: DIVIDE, num1, num2}
}

