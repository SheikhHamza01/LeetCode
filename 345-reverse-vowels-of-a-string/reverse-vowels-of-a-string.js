/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = "aeiouAEIOU";
    var str = s.split('');
    var i = 0;
    var j = s.length - 1;

    while (i < j) {
        if (vowels.indexOf(str[i]) === -1) {
            i++;
            continue;
        }
        if (vowels.indexOf(str[j]) === -1) {
            j--;
            continue;
        }
        var temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;
        j--;
    }

    return str.join('');
};
