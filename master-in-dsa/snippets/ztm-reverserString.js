
//fahad
//dahaf


function reverse(str){
 //check  input
 if(!str || str.length < 2 || typeof str !== 'string')
 {
    return 'hm thats not good';
 }
 //create an empty array 
 const backWards=[];
 //for loop in decrement
 for (let index = str.length-1; index > -1; index--) {
 //push each item to our empty array
 backWards.push(str[index]);
 }
 //return array of strings with join
 return backWards.join("");
}


function revere2(str){
 //check  input
 if(!str || str.length < 2 || typeof str !== 'string')
 {
    return 'hm thats not good';
 }
 return str.split("").reverse().join("");
}

const reverse3=str => [...str].reverse().join("");

console.log(reverse('fahad'));
console.log(revere2('fahad'));
console.log(reverse3('fahad'));