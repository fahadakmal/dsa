class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Stack {
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }
    peek(){
        return this.top;
    }
    push(value){
         const newNode=new Node(value);
         if(this.length === 0){
           this.top=newNode;
           this.bottom=newNode;
         }else{
            newNode.next=this.top;
            this.top=newNode;
         }
         this.length++;
         return this;
    }
    pop(){
        if(this.length === 0){
            return ;
        }
        if(this.bottom === this.top){
            this.bottom = null;
        }
        //next item
        const nextNode=this.top.next;
        this.top.next=null;
        this.top=nextNode;
        this.length--
    }
}

const myStack=new Stack(5)


myStack.push(5)
myStack.push(6)
myStack.push(8)
// myStack.pop();

console.log(myStack.peek())
console.log(myStack)