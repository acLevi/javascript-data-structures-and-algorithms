import areBracketBalanced from "./checkBrackets.js"
import { isCloseBracket, isOpenBracket, isOperand, isOperator, openingBracketOf, precedenceOf } from "../../util.js";
import Stack from "./stack.js";

/**
 * Convert Infix expression to Postfix expression
 * @param {String} expression 
 * @returns {String}
 */
export default function infixToPostFix(expression) {
    expression = expression.replace(/\s/g, ''); // Remove spaces from expression

    if (!areBracketBalanced(expression)) {
        return false;
    }

    let stack = new Stack;
    let postfixExp = ''; // Output string

    // Iterate over the expression for conversion
    for (let i = 0; i < expression.length; i++) {
        let value = expression[i]

        if (isOperand(value)) {
            // If the scanned charcater is and operand
            // add it to output string
            postfixExp += value;
        } else if (isOpenBracket(value)) {
            // If the scanned character is an
            // open bracket, push it to the stack
            stack.push(value);
        } else if (isCloseBracket(value)) {
            // If the scanned charcter is an close bracket
            while(stack.peek() != openingBracketOf(value)) {
                // Pop to output string from the stack
                // until an close bracket is encouterd
                postfixExp += stack.pop();
            }
            stack.pop();
        } else {
            // If an operator is scanned
            while(!stack.isEmpty() && precedenceOf(expression[i]) <= precedenceOf(stack.peek())) {
                postfixExp += stack.pop();
            }
            stack.push(value)
        }
    }
    
    // Pop all the remaining elements from the stack
    while (!stack.isEmpty()) {
        postfixExp += stack.pop();
    }

    return postfixExp;
}