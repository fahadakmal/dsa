
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue {
    constructor(value) {
        this.front=new Node(value);
        this.back=this.front;
        this.length=1;
    }

    peek(){
        return this.front;
    }

    enQueue(value){
        let newNode=new Node(value)
        this.back.next=newNode;
        this.back=newNode;
        return this;
    }

    deQueue(){
        let front=this.front;
        this.front=front.next
    }
}

let myQueue=new Queue("a")
myQueue.enQueue('b');
myQueue.enQueue('c'); // 2nd queue
myQueue.enQueue('d'); // 2nd queue
myQueue.enQueue('e'); 
myQueue.enQueue('f'); // 2nd queue
 // 2nd queue

 myQueue.deQueue();
 myQueue.deQueue();
console.log(`Front: ${myQueue.peek().value}`);// a