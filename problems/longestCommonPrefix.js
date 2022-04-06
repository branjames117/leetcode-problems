// first attempt at solution; did not work in cases where one of the strings does not have a common prefix at all
var longestCommonPrefix = function (strs) {
  let hash = {};

  for (let j = 0; j < strs.length; j++) {
    for (let i = strs[j].length; i > 0; i--) {
      if (hash[strs[j].slice(0, i)]) {
        hash[strs[j].slice(0, i)] += 1;
        break;
      } else {
        hash[strs[j].slice(0, i)] = 1;
      }
    }
  }

  const greatestPrefix = Object.keys(hash).reduce(function (a, b) {
    return hash[a] > hash[b] ? a : b;
  });

  return greatestPrefix;
};

// second attempt, this one works at 75ms!
var longestCommonPrefix = function (strs) {
  let prefix = '';

  // loop through the letters of each string in the array
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      // if the char is not identical to the corresponding char in the adjacent string, we're done comparing so return the prefix
      if (strs[j][i] !== strs[j + 1][i]) {
        return prefix;
      }
    }

    // if all the strings share the same character in that index, add it to the prefix
    prefix += strs[0][i];
  }

  return prefix;
};
