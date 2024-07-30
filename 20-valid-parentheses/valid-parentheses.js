// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//    for(let i = 0; i < s.length; i += 2) {
//         for (let i = 0; i < s.length; i++) {
//         if (s[i] == '(') {
//             if (i + 1 < s.length && s[i + 1] == ')') {
//                 return true;
//             }
//         } else if (s[i] == '{') {
//             if (i + 2 < s.length && s[i + 2] == '}') {
//                 return true;
//             }
//         } else if (s[i] == '[') {
//             if (i + 2 < s.length && s[i + 2] == ']') {
//                 return true;
//             }
//         }
//     }
//     return false;
//     }
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const matchingParentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
