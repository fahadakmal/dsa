
class Stack {
    constructor(){
      this.data=[]
    }
    peek(){
        return this.data[this.data.length-1];
    }
    push(value){
         this.data.push(value)
         return this;
    }
    pop(){
      this.data.pop()
    }
}

const myStack=new Stack(5)


myStack.push(5)
myStack.push(6)
myStack.push(8)
myStack.pop();

console.log(myStack.peek())
console.log(myStack)