import { isCloseBracket, isOpenBracket, openingBracketOf } from "../../util.js";
import Stack from "./stack.js";

/**
 * Check if brackets are balanced
 * @param {String} expression
 * @return {Boolean}
 */
export default function areBracketBalanced(expression) {
  let stack = new Stack();
  expression = expression.replace(/\s/g, ""); // Remove spaces from expression

  if (expression.length == 0) {
    return false;
  }

  // Traversing the expression
  for (let c of expression) {
    if (isOpenBracket(c)) {
      // If is open bracket, push in the stack
      stack.push(c);
    } else if (isCloseBracket(c)) {
      // else, then it must be closing.
      if (stack.peek() === openingBracketOf(c)) {
        // If the current bracket matches the corresponding open bracket
        // means that the expression so far is balanced
        // pop the bracket of the stack
        stack.pop();
      } else { 
        // If the current bracket not matches
        // the expression is unbalanced, return false;
        return false;
      }
    }
  }

  // If the stack is empty, it means the expression is correct
  return stack.isEmpty() ? true : false;
}