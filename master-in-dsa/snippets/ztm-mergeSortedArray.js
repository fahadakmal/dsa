
function mergeSortedArray(arr1,arr2){
   //CHECK INPUT 
   //newMergedSortedArray
   const newMergedSortedArray=[]
   let array1Item=arr1[0];
   let fisrtItem2=arr2[0];
   let i=1;
   let j=1;

   while (array1Item || fisrtItem2) {
      console.log(array1Item,fisrtItem2)
    if(!fisrtItem2 || array1Item < fisrtItem2){
        newMergedSortedArray.push(array1Item)
        array1Item=arr1[i]
        i++;
    }else{
        newMergedSortedArray.push(fisrtItem2)
        fisrtItem2=arr2[j]
        j++
    }
   }

   return newMergedSortedArray
}
 

console.log(mergeSortedArray([0,3,4,],[4,6,30]))



