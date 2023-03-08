


function reverseString(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return " hm that is not good "
    }

    const backWards = []
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backWards.push(str[i])
    }
    console.log(backWards)
 
    return backWards.join('');
}


function reverse2(str){
    return str.split("").reverse().join('')
}
const reversesd = str =>str.split("").reverse().join('')

console.log(reverseString("Hi my name is fahad"))
console.log(reverse2("Hi my name is fahad"))