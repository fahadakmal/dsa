class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(value){
          this.head=new Node(value);
          this.tail=this.head;
          this.length++;
    }

    append(value){
        let newNode= new Node(value);
        newNode.prev=this.tail;
        this.tail.next=newNode;
        this.tail=newNode
        this.length++;
    }

    prepend(value){
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
        this.length++
    }
    insert(index,value){
        let newNode=new Node(value);
        let leader= this.traverseToIndex(index-1);
        let follower=leader.next;
        leader.next=newNode;
        follower.prev=newNode;
        newNode.prev=leader;
        newNode.next=follower;
        this.length++;
    }

    remove(index){
        let leader= this.traverseToIndex(index-1);
        let follower=leader.next.next;
        leader.next=follower;
        follower.prev=leader;
        this.length--;
    }

    printList(){
        let arr=[];
        let currentNode=this.head;
        while(currentNode !==null){
            arr.push(currentNode.value)
            currentNode=currentNode.next;
        }
        return arr;
    }

    reverse(){
        let firstNode=this.head;
        let secondNode=firstNode.next;
        while(secondNode){
            let temp=secondNode.next;
            secondNode.next=firstNode;
            secondNode.prev=temp;
            firstNode=secondNode;
            secondNode=temp;
        }
        this.head.next=null;
        this.head=firstNode;
        return this;
        
    }

    traverseToIndex(index){
        let counter=0;
        let currentNode=this.head;
        while(counter !== index){
            currentNode=currentNode.next;
            counter++
        }
        return currentNode;
    }
}