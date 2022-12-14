// Given an array [2,5,1,2,3,5,1,2,4]
// it should return 2

function firstRecurringCharacter(array){
  let map={};
  for (let index = 0; index < array.length; index++) {
    if(map[array[index]] !== undefined){
          return array[index];
    }else{
       map[array[index]] = index

    }
    console.log(map)
  }
 return undefined;
}

// firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
console.log(firstRecurringCharacter([2,1,5,2,3,5,1,2,4]));