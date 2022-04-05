// solution 1 - convert number to string, then to array, then run a loop through the array (once) to check if forward-index is equal to its comparable reverse-index, and if it's true all the way through then we have a palindrome; runtime 244ms, time complexity O(n) - can we do better?
var isPalindrome = function (x) {
  let numArr = x.toString().split('');

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] != numArr[numArr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// solution 2 - same as above, but we can stop looping through the array not only when we find a mismatch but also when we're at the halfway point, since further comparisons are wasteful; this improves my time to ~172ms, twice as fast of course!

var isPalindrome = function (x) {
  let numArr = x.toString().split('');

  for (let i = 0; i < numArr.length / 2; i++) {
    if (numArr[i] != numArr[numArr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// solution 3 - convert number to string, reverse it, compare it to original, this made the time complexity worse, 249-362ms.

var isPalindrome = function (x) {
  let original = x.toString().split('');
  let [...reversal] = original;
  reversal.reverse();
  return original.join('') === reversal.join('');
};

// much simplified version of solution 3, still a slower runtime ~274ms

var isPalindrome = function (x) {
  return x == x.toString().split('').reverse().join('');
};
