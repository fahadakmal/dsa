

function fabbonaci(n) {
    if(n<2) return 1;
    let fibNums=[0,1,1];
    for (let i = 3; o < n; i++) {
        fibNums[i]=fibNums[i-1]=fibNums[i-2];
    }
    return fibNums[n]
}