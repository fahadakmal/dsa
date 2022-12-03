


function naiveSearch(long,short){
    let count=0;

    for(let i=0;i<long.length;i++){
        for (let j = 0; j < short.length; j++) {
                        // console.log('short',short[j],j)

            // console.log('long',long[i+j],j)
            if(short[j] !== long[i+j]){
                break;
            }
            if(j === short.length-1){
                count++
            }
        }
    }
console.log('dd',count)    
}

naiveSearch("lori loled","lol")