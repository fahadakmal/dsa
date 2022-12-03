const array=[1,1,1,1,1,1,2]

function conuntUniqueValues(arr) {
    let i=0

    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
            console.log(i,j)

    }
  
}
conuntUniqueValues(array)
console.log('bvbvb')