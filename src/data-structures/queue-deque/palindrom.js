import Deque from "./deque.js";

function palindromeChecker(string) {
  if (
    string === undefined ||
    string === null ||
    (string !== null && string.length === 0)
  ) {
    return false;
  }
  const deque = new Deque();
  const lowerString = string.toLocaleLowerCase().split(" ").join("");
  let isEqual = true;
  let firtChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    firtChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firtChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

console.log("a", palindromeChecker("a"));
console.log("aa", palindromeChecker("aa"));
console.log("kayak", palindromeChecker("kayak"));
console.log("level", palindromeChecker("level"));
console.log(
  "Was it a car or a cat I saw",
  palindromeChecker("Was it a car or a cat I saw")
);
console.log("Step on no pets", palindromeChecker("Step on no pets"));
