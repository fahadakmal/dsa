interface Student{
    id:number
}
const printStudentId= (student: Student)=>{
    console.log(student?.id)
}
//statically typed languages
//dynamically typed languages
//strong typed languages
//weak typed language
//structured type languages
//nominal typed language


//Javascript
//Weakly Typed Language
//dynamically typed languages
// Structural Typed language


//Typescript
//Statically Typed Language
//Strong typed language
//Structured Language
let student={id:123,name:"jeff"} 
console.log(printStudentId(student))
//excess property checking
  // if you declare your object in a variable and then pass it to the function then Typescript trust on you but when you directly pass an object  to function then it will give and error like below.

console.log(printStudentId({id:5,name:"fahad"}))

//Example of the excess property and Structured Typed Language

interface PartTimeCourse {
    _brand: 'PartTime'
    firstGrade:number,
    secondGrade: number,
}

const computeAvg= (partTimeCourse:PartTimeCourse) =>{
    return (partTimeCourse?.firstGrade + partTimeCourse?.secondGrade)/200;
}
interface FullTimeCourse {
    _brand: 'FullTime'
    firstGrade:number,
    secondGrade: number,
    thirdGrade: number
}

const printAvg = (fullTimeCourse:FullTimeCourse) =>{
    const avg= computeAvg(fullTimeCourse)
    console.log(`The average grade is ${avg}`)
}

printAvg({
    firstGrade:98,
    secondGrade:10,
    thirdGrade:12,
    _brand:"FullTime"
})

// for computefunction function we think that its gonna print the average of three grades but in reality its going to print only the average of two grades 
//typescript do not care about the excess property so you need to be careful.

// Structural typed language
//TypeScript can infer types from values that are passed into functions
//-- If its walk like duck or quack like a duck .it will be a duck

//we can resolve above problem by using nomical typing like _brand property in above interfaces