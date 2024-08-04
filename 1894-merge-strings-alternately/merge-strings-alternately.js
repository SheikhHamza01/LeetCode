/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var word3= "";
    var len=word1.length+word2.length;
    for(let i=0;i<len;i++){
        if(i<word1.length){
            word3+=word1[i];
        }
        if(i<word2.length){
            word3+=word2[i];
        }
    }
    return word3;
   
};