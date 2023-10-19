class Array{
    constructor(){
        this.length = 0;
        this.data={};
    }

    arrayData(){
        return this.data;
    }

    lookUp(index){
         if(index <0 || index > this.length-1){
            return  'index does not exist';
         }
         return this.data[index]
    }

    push(value){
            this.data[this.length]=value;
            this.length++
    }
    pop(){
        if(this.length === 0){
            return "Array is empty"
        }
        delete this.data[this.length];
        this.length--
    }
    insert(index,value){
        if(index < 0){
            return 'index not exist'
        }
        if(index >= this.length-1){
            this.push(value);
        }
        let currentElement=this.data[index];
        this.data[index] = value;

        for(let i=index;i<this.length;i++){
            let element=this.data[i+1];
            this.data[i+1]=currentElement;
            currentElement=element
        }
        this.length++;  
    }
    delete(index){
        if(!this.data[index]){
            return 'index does not exist'
        }
        for (let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }



}

const myArray=new Array();

myArray.push('a')
myArray.push('b')
myArray.push('d')
myArray.push('e')
myArray.push('f')
myArray.push('g')


myArray.insert(2,'c')

console.log(myArray.lookUp(2))
    // ['a','b','d','e','f','g']
//    0   1   2   3   4   5


