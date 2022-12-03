


function odd(arr){
    if(arr[arr.length-1]%2==0){
        return true;
    }else{
        arr.pop();
        return odd(arr)
    }
    
    
}

console.log(odd(1,2,3,4,5))