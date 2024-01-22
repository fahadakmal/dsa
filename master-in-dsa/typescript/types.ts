 let isStudent: boolean= true;
 isStudent= false 

 let studentNumber: number= 3;

 let email: string = "fahad@gmail.com";
 let fullName: string = "fahad Akmal";
 let greeting: string = `hello, ${fullName}`;

 let friends: string[] =['bob','alice','joe']

 let nameAgeAndSchool: [string, number, string];
 nameAgeAndSchool=[ 'Fahad',8,'University of Pesha']

 let notSure: any =8;
 notSure= "a string instead";
 notSure= true;

 const log =():void => {console.log("hello world");
}

let u: undefined =undefined;
let n:null =null;

let number: number =8;
number = null;
number = undefined;

u = null;
n= undefined;

//type infers
// let booleanValue:boolean=true
//you dont need to write boolean like above because tyescript infers value itself like below.
// let booleanValue= true;

