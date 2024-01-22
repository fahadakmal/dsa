class Array{
   constructor(){
    this.data={};
    this.length=0;
   }

   push(value){ // o(1) 
     this.data[this.length]=value;
     this.length++
   }
   access(index){ // o(1)
    if(index < 0 || index > this.length-1){
        return "Index out of bounds";
    }
    return this.data[index]   }
   pop(){ // o(1)
    delete this.data[this.length-1];
    this.length--;
   }
   insert(value,index){ //o(n)
    if(index < 0){
        return " index does not exist"
    }
    
    if(index > this.length){
       return this.push(value);
    }
   //make reference of current element
   let currentElement=this.data[index];
   //update the index value in data
   this.data[index]=value;
   //shift the remaining array
   for(let i=index;i<this.length ;i++){
            let element=this.data[i+1];
            this.data[i+1]=currentElement;
            currentElement=element
    }
    this.length++;
    return this.data;
    }
    delete(index){   //o(n)
        if(index < 0){
            return "index does not exist"
        }
        if(index > this.length){
            return this.pop()
        }
      
        for (let i = index; i < this.length; i++) {
            this.data[i]=this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
    search(value){  //O(n)
        for(let i=0;i<this.length;i++){
            if(this.data[i]===value){
                return this.data[i]
            }
        }
        return undefined;
    }
}

const myArray=new Array();

myArray.push('a')
myArray.push('b')
myArray.push('d')
myArray.push('e')
myArray.push('f')
myArray.push('g')


myArray.insert('c',2)

console.log(myArray.lookUp(2))
