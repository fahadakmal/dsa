const numbers=[99,44,6,2,1,5,63,87,283,4,0]

function bubbleSort(array) {
    const length=array.length;
    for (let index = 0; index < length; index++) {
        for (let j = 0; j < length; j++) {
           if(array[j] > array[j+1]){
            let temp=array[j];
            array[j]=array[j+1]
            array[j+1]=temp
           }
            
        }
        
    }
}
bubbleSort(numbers)
console.log(numbers)