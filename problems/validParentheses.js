// solution 1 - too simple, does not take into account nested parentheses

var isValid = function (s) {
  let valid = true;

  for (let i = 0; i < s.length; i += 2) {
    if (
      (s[i] == '(' && s[i + 1] == ')') ||
      (s[i] == '{' && s[i + 1] == '}') ||
      (s[i] == '[' && s[i + 1] == ']')
    ) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

// solution 2 - from Urfan Guliyev at https://dev.to/urfan/leetcode-valid-parentheses-with-javascript-eh9

var isValid = function (s) {
  const stack = [];

  for (i = 0; i < s.length; i++) {
    // store current character in string
    let curChar = s[i];

    // if char is an opening parens, add its compliment to the stack array
    switch (curChar) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        // otherwise, char must be a closing parens, so pop off the last complimentary char off the stack and store it in topElement
        topElement = stack.pop();
        // if these don't match, parentheses are invalid
        if (curChar !== topElement) return false;
    }
  }

  // if anything is left on the stack after all that pushing and popping, string is not valid
  return stack.length === 0;
};
