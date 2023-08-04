import Stack from './stack.js';
import { applyOperator, hasPrecedence, isCloseBracket, isOpenBracket, isOperand, isOperator } from '../../util.js';

/**
 * Function to evaluate a given expression where tokens
 * are separet by space
 * @param {string} expression 
 * @returns {Number}
 */
function evaluate(expression) {
    let tokens = expression.split('');

    // Stack for numbers: "values"
    let values = new Stack;
    // Stack for operators: "operators"
    let operators = new Stack;

    for (let i = 0; i < tokens.length; i++) {

        // Current token is a whitespace, skip it
        if (tokens[i] == ' ') {
            continue;
        }

        // Current toke is a number,
        // push it ot stack for numbers
        if (tokens[i] >= '0' && tokens[i] <= '9') {
            let numBuff = "";

            // There may be more than one digits in number
            while (i < tokens.length && tokens[i] >= '0' && tokens[i] <= '9') {
                numBuff = numBuff + tokens[i++];
            }
            values.push(parseInt(numBuff, 10));
            // Right now the i points to
            // the character next to the digit,
            // since the for loop also increases
            // the i, we would skip one
            // token position; we need to
            // decrease the value of i by 1 to
            // correct the offset.
            i--;
        } else if (isOpenBracket(tokens[i])) {
            // Current toke is an opening
            // brace, push it to operators stack.
            operators.push(tokens[i]);
        } else if (isCloseBracket(tokens[i])) {
            // Closing brace encountered,
            // solve entire brace
            while (!isOpenBracket(operators.peek())) {
                values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
            }
            operators.pop();
        } else if (isOperator(tokens[i])) {
            // Current token is an operator
            while (!operators.isEmpty() && hasPrecedence(tokens[i], operators.peek())) {
                // While top of operators stack has same
                // or greater precedence to current
                // token, which is an operator.
                // Apply operator on top of operators stack
                // to top two elements in values stack
                values.push(applyOperator(operators.pop(), values.pop(), values.pop())); 
            }
            // Push current token to operators
            operators.push(tokens[i]);
        }
    }

    // Entire expression has ben
    // parsed at this point, apply remainig
    // operatos to remaining values
    while (!operators.isEmpty()) {
        values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
    }

    // Top of values stack contains result, return it
    return values.pop();
}

console.log(evaluate("10 + 2 * 6"));
console.log(evaluate("100 * 2 + 12"));
console.log(evaluate("100 * ( 2 + 12 )"));
console.log(evaluate("100 * ( 2 + 12 ) / 14"));
