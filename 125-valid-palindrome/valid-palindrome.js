/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) {
        return true;
    }
    var str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let i = 0;
    let j = str.length - 1;
    
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    
    return true;
};
