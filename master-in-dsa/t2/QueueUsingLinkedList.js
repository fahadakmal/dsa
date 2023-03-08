class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }

    peek(){
        return this.first;
    }
    enQueue(value){
        const newNode=new Node(value)
        if(this.length === 0){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        this.length++;
        return this;
    }
    deQueue(){
        if(this.length === 0){
            return null;
        }
        if(this.length ===1){
            this.last=null;
            this.first=null;
            this.length--;
            return;
        }

        this.first=this.first.next;
        this.length--;
    }
}

const queue= new Queue();

queue.enQueue("fahad")
queue.enQueue("ali");
queue.enQueue("sdsd")
queue.deQueue();
queue.deQueue();
queue.deQueue();


console.log(queue);