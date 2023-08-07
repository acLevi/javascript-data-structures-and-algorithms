import Stack from "./stack.js";

/**
 * Function to reverse individual words in a given string using stack
 * @param {String} text 
 * @returns {String}
 */
function reverseWords(text) {
    let stack = new Stack;
    let outputString = "";

    // Traverse given string and push all charcters
    // to stack until we see a space.
    for (let char of text) {
        if (char != " ") {
            stack.push(char);
        } else {
            // When we see a space, we print contents
            // of stack.
            while (!stack.isEmpty()) {
                outputString = `${outputString}${stack.pop()}`
            }
            outputString += " ";
        }
    }

    // Since there may not be spcae after
    // last word.
    while (!stack.isEmpty()) {
        outputString = `${outputString}${stack.pop()}`
    }

    return outputString;
}

console.log(reverseWords('Hello World'));