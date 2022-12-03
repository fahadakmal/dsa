
function fabbonaci(n,memo=[undefined,1,1]) {
    if(memo[n] !== undefined){
        return memo[n]
    } 
    let res= fabbonaci(n-1,memo) +fabbonaci(n-2,memo)
    memo[n] =res;
    return res;
    
}
console.log(fabbonaci(5))