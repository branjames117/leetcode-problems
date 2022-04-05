// initial accepted solution - brute force - O(n^2) time complexity @ 120ms to complete

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// optimized solution - O(n) time complexity @ 64ms to complete
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
