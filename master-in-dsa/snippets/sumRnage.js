
function sumRnage(num){
      if(num === 1){
        return 1
    } 
    return num +sumRnage(num-1)
}  
sumRnage(4)


// function sumRnageWithItteration(num){
//     let total=0;
//     for(let i= num;i>0;i--){
//         total=total+i;
//     }
//     return total;
    
// }
// console.log('with iteration',sumRnageWithItteration(5))
