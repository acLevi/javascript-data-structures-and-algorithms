import Stack from "./stack.js"

function insertAtBottom(stack, element) {
    // If stack is empty, push the element in a stack
    if (stack.isEmpty()) {
        stack.push(element)
        return;
    }

    // Pop elements from stack and keep it a function call
    let poppedElement = stack.pop()
    // Push element at last
    insertAtBottom(stack, element);
    // Push all the popped elements in a stack
    stack.push(poppedElement);
}

function reverseStack(stack) {
    if(stack.isEmpty()) {
        return undefined;
    }

    let element = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, element);
}

let myStack = new Stack;

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log(myStack);

reverseStack(myStack);

console.log(myStack);