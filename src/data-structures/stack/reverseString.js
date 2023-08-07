import Stack from "./stack.js";

/**
 * Function to reverse string using stack.
 * @param {String} string Normal String
 * @returns {String} Reversed String
 */
function reverseString(string) {
    let stack = new Stack;
    let outputString = "";

    // Push all characters of sting
    // to stack.
    for (let char of string) {
        stack.push(char);
    }

    // Pop all characters of string
    // and put them back to output string.
    while (!stack.isEmpty()) {
        outputString = `${outputString}${stack.pop()}`;
    }

    return outputString;
}

console.log(reverseString("GeeksQuiz"));