export const DOES_NOT_EXIST = -1;

export function defaultEquals(a, b) {
  return a === b;
}

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

export function defaultCompare(a, b) {
  if (a === b) {
    // {1}
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}

export function lesserOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}


export function biggerOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp = Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

export function defaultDiff(a, b) {
  return Number(a) - Number(b);
}

export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

export function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString(); // {1}
}

export function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

export function isOpenBracket(char) {
  switch (char) {
    case "(":
    case "[":
    case "{":
      return true;
  }
  return false;
}

export function isCloseBracket(char) {
  switch (char) {
    case ")":
    case "]":
    case "}":
      return true;
  }
  return false;
}

export function closingBracketOf(char) {
  switch (char) {
    case "(":
      return ")";
    case "{":
      return "}";
    case "[":
      return "]";
  }
  return false;
}

export function openingBracketOf(char) {
  switch (char) {
    case ")":
      return "(";
    case "}":
      return "{";
    case "]":
      return "[";
  }
  return false;
}

export function isBracket(char) {
  switch(char) {
    case '(':
    case ')':
    case '[':
    case ']':
    case '{':
    case '}':
      return true;
  }
  return false;
}

export function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "^":
    case "%":
      return true;
  }
  return false;
}

export function isOperand(x) {
  if ((x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z') || (x => '0' && x <= '9') && !isBracket(x) && !isOperator(x) && x !== ' ') {
    return true;
  }
  return false
}

export function precedenceOf(x) {
  if (x == '^'){
    return 3;
  } else if (x == '/' || x == '*') {
    return 2;
  } else if (x == '+' || x == '-') {
    return 1;
  } else {
    return -1;
  }
}

export function hasPrecedence(operator1, operator2) {
  if (isOpenBracket(operator2) || isCloseBracket(operator2)) {
    return false;
  }
  if ((operator1 == '*' || operator1 == '/') && (operator2 == '+' || operator2 == '-')) {
    return false;
  } else {
    return true;
  }
}

export function applyOperator(operator, operand2, operand1) {
  switch(operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      if(operand2 === 0) {
        return undefined;
      } 
      return parseInt(operand1 / operand2, 10);
    case '^': {
      return operand1 ** operand2;
    }
  }
  return undefined;
}