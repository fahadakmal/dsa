// typescript will infers the add5 function to be a function implicilty
const add5 =(a :number, b: number) :number => a+b;

//below we define the implicit type of function 
const add6:(a:number,b:number)=>number =(a,b) => a+b;

//we can also make function typed with interfaces
 interface Adder {
    (a:number, b:number):number;
 }

 const add7: Adder = (a,b) =>a+b;

 // by usinf function types we can nicely reuse the type for muiple places as example given below

 interface BinaryFn {
    (a: number, b: number): number
 }

 const add0: BinaryFn= (a,b) =>a+b;
 const mul: BinaryFn= (a,b) =>a*b;
 const sub: BinaryFn= (a,b) =>a-b;
 const div: BinaryFn= (a,b) =>a/b;

 //=================
 //alway type the return type of the function
 

