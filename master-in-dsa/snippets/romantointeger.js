/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanObject={
        "I"  :1,
        "V"  :5,             
        "X"  :  10,
        "L"  : 50,
        "C"  : 100,
        "D"  :500,
        "M"  :1000,
    }
    let num=romanObject[s[s.length-1]];
    for(let i=s.length-2;i > -1;i--){
        if(romanObject[s[i]]<romanObject[s[i+1]])
        {
                    num=num-romanObject[s[i]]

        }else{
                    num=num+romanObject[s[i]]

        }
    }

return num
};
console.log(romanToInt("III"));
console.log(romanToInt("LXVII"));
console.log(romanToInt("MCMXCIV"));

//5
//4
//104
//94
//1094
//994
//1994
