/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const resultantArray=[];
    for(let i=0;i<arr.length;i++){
        resultantArray.push(fn(arr[i],i))
    }
    return resultantArray;
};