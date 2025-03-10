/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let count=0;
    let testArr=[];
    return function(...args) {
        let key=args.join(",");
        if(key in testArr){
            return testArr[key];
        }
        count=count+1;
        let result=fn(...args);
        testArr[key]=result;
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */