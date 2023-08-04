import { applyOperator, isOperand, isOperator } from '../../util.js';
import Stack from './stack.js';

function evaluatePostfix(expression) {
    let stack = new Stack;

    for (let i = 0; i < expression.length; i++) {
        let value = expression[i];

        if(isOperand(value)) {
            let numBuff = 0;
            while (isOperand(value)) {
                numBuff = numBuff * 10 + (value - '0');
                i++;
                value = expression[i];
            }
            i--;
            stack.push(numBuff)
        } else if (isOperator(value)) {
            let var2 = stack.pop();
            let var1 = stack.pop();
            stack.push(applyOperator(value, var2, var1))
        }
    }

    return isNaN(stack.peek()) ? undefined : stack.pop();
}

console.log(evaluatePostfix("100 200 + 2 / 5 * 7 +"));