// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const validString = (str) => {
  const c = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  const stack = [];
  for (i = 0; i < str.length; i++) {
    if (c[str[i]] && c[str[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
};

console.assert(
  validString("(){}[]") === true,
  "Returns true when series of opening and closing brackets."
);

console.assert(
  validString("[({})]") === true,
  "Returns true when series of concentric opening and closing brackets."
);

console.assert(
  validString("[({") === false,
  "Returns false when no closing brackets."
);

console.assert(
  validString("[({])}") === false,
  "Returns false when brackets are closing in incorrect order."
);
