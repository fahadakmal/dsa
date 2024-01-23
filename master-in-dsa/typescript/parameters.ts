
//optional parameter in ts
//optional parameters will be following to required parameter 

// const makeMangoJuice =(noSugar:boolean,noMilk?:boolean):{noSugar:boolean;noMilk:boolean} =>{
//     const newSmoothie={noSugar,noMilk:false}
//     if(noMilk) newSmoothie.noMilk=noMilk;
//     return newSmoothie
// }

//default parameter 
//default parameters will be following to required parameter 
// const makeMangoJuice =(noSugar:boolean,noMilk:boolean =false):{noSugar:boolean;noMilk:boolean} =>{
//     const newSmoothie={noSugar,noMilk}
//     return newSmoothie
// }


//if you dont know how many parameters will be there you can simply use rest operators to get out all the remaning parameters


//overloading parameters
function add100(a: number, b : number) : number
function add100(a: string, b : string) : number

function add100 (a,b){
    return a+b;
}




makeMangoJuice()