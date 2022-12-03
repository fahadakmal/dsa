/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix=""
    let firstWordFirstCharIndex=0;
    let wordToFind=strs[0][firstWordFirstCharIndex];
    while (firstWordFirstCharIndex < strs[0].length) {
            console.log(wordToFind)
        let wordFound=false;
           for (let index = 0; index < strs.length; index++) {
        if(strs[index][firstWordFirstCharIndex] === wordToFind){
            wordFound === true
        }else{
            wordFound === false
        }
    }
        if(wordFound){
            prefix+=wordToFind;
            firstWordFirstCharIndex++;
        }
        
    }
 return prefix;
};

console.log(longestCommonPrefix( ["flower","flow","flight"]))