
enum SchoolHeterogeneous {
    Waterloo = 1,
    Harvard = 'Harvard',
    Stanford = 2,
    Berkeley = 'Berkeley'
}

enum SchoolNumber {
    Waterloo,
    Harvard,
    Stanford,
    Berkeley
}

enum SchoolString {
    Waterloo = 'Waterloo',
    Harvard = 'Harvard',
    Stanford = 'Stanford',
    Berkeley = 'Berkeley'
}

const foo=(school:SchoolString) =>{
    console.log(school)
}

console.log(SchoolString.Harvard)

foo(SchoolString.Waterloo)
// =========

//constant enums

const enum School {
    Waterloo=1,
    Harvard,
    Stanford,
    Berkeley
}

console.log(School.Waterloo); 
// when you add const with enum then you make sure that it wont be available by using index value
// console.log(School[1])