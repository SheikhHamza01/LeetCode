/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  var arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(nums[i]);
        arr.push(nums[i + n]);
    }
    return arr;
};