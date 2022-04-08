// solution 1 - mine
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // for each item in array...
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let j = i;
    // check how many consecutive items are the same and keep track so we can splice that amount out of the array before moving on to the next unique element
    while (nums[j] === nums[j + 1]) {
      count++;
      j++;
    }

    nums.splice(i, count);
  }
};

// solution 2 - from Bahay Gulle Bilgi at https://medium.com/swlh/javascript-remove-duplicates-from-sorted-array-in-place-d3d959fb4d77 - better because it doesn't rely on built-in methods to manipulate the original array like my solution does

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else {
      j++;
    }

    return i + 1;
  }
};
