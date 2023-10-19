
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
            }
}
class StackUsingLinkedList{
    constructor(value){
        this.top=new Node(value);
        this.bottom=this.top;
        this.length=1;
    }
    peek(){
        return this.top;
    }

    push(value){
        let newNode=new Node(value);
        newNode.next=this.top;
        this.top=newNode
        this.length++;
    }

    pop(){
        let item=this.top;
        this.top.next=null;
        this.top=item.next;
        this.length--;
        return item;
    }

}

const myStack=new StackUsingLinkedList(5)


myStack.push(6)
myStack.push(7) 
myStack.push(8)
myStack.pop();

console.log(myStack.peek())
