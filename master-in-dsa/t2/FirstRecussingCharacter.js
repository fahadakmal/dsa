
const firstRecurringCharacter=(arr)=>{
 if(arr.length >1){
    const temp={}
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(temp[element]){
             return element;
        }else{
        temp[element] = true;
        }
      }
 }
return undefined
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,3,4,5]));