const letters=['a','d','z','d','d']
console.log(letters.sort())
const basket=[2,65,34,2,1,7,8]
console.log(basket.sort())
console.log(basket.sort(function (a,b) {
    return a-b;
}))  //IN JS SORT METHOD CONVERTS IT INTO A STRING

console.log('65'.charCodeAt(0))
console.log('34'.charCodeAt(0))
console.log('22'.charCodeAt(0))
console.log('08'.charCodeAt(0))
//SO ALWAYS STUDY FIRST EVERY FUNCTION YOU ARE USING LIKE HOW IT WORKS 

//IF YOU WANT TO COMAPRE DIFFERNET LANGUAGE LIKE SPANISH THAN THIS SORT METHOD WILL NOT B WORKING

const spanish=[];
spanish.sort(function (a,b) {
    return a.localeCompare(b)
})

//check MDN for diffrent things sorting like numbers, strings