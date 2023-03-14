
let counter=0;
function inception() {
    if(counter > 3){
    return "done";
    }
    counter++
    return inception()
}
inception()
//above code will return undefined run this in chrome developer tools