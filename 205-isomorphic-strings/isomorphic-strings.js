
//Time Limit exceed in one test case code is correct

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isIsomorphic = function(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     for (let i = 0; i < str1.length; i++) {
//         for (let j = i + 1; j < str1.length; j++) {
//             if (
//                 (str1[i] === str1[j] && 
//                 str2[i] !== str2[j]) ||
//                 (str1[i] !== str1[j] && 
//                 str2[i] === str2[j])
//             ) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }


/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var isIsomorphic = function(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let mapST = {};
    let mapTS = {};

    for (let i = 0; i < str1.length; i++) {
        let charS = str1[i];
        let charT = str2[i];

        if ((mapST[charS] && mapST[charS] !== charT) || 
            (mapTS[charT] && mapTS[charT] !== charS)) {
            return false;
        }

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
}
