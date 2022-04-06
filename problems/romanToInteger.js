// my brute force solution, runtime 204ms

var romanToInt = function (s) {
  let sum = 0;

  // the following if statements eliminate the cases where subtraction is required
  if (s.indexOf('CM') !== -1) {
    sum += 900;
    s = s.split('CM').join('');
  }

  if (s.indexOf('CD') !== -1) {
    sum += 400;
    s = s.split('CD').join('');
  }

  if (s.indexOf('XC') !== -1) {
    sum += 90;
    s = s.split('XC').join('');
  }

  if (s.indexOf('XL') !== -1) {
    sum += 40;
    s = s.split('XL').join('');
  }

  if (s.indexOf('IX') !== -1) {
    sum += 9;
    s = s.split('IX').join('');
  }

  if (s.indexOf('IV') !== -1) {
    sum += 4;
    s = s.split('IV').join('');
  }

  // leaving us with the vanilla roman numerals to loop through, and simple addition
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'M':
        sum += 1000;
        break;
      case 'D':
        sum += 500;
        break;
      case 'C':
        sum += 100;
        break;
      case 'L':
        sum += 50;
        break;
      case 'X':
        sum += 10;
        break;
      case 'V':
        sum += 5;
        break;
      case 'I':
        sum += 1;
        break;
    }
  }

  return sum;
};

// solution from Urfan Guliyev @ https://dev.to/urfan/leetcode-roman-to-integer-with-javascript-1g3n - improves runtime to 184ms

var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur; // IV -> 5 - 1 = 4
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};
