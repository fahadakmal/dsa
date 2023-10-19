class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        this.head= new Node(value)
        this.tail=this.head;
        this.length=1;
    }
    append(value){
            const newNode=new Node(value);
            this.tail.next=newNode;
            this.tail=newNode;
            this.length++;
    }
    prepend(value){
        const newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode
        this.length++;
    }

    insert(index,value){
        if(index >= this.length){
            this.append(value);
        }
        const newNode=new Node(value);

        const leader=this.traverseToIndex(index-1);
        const follower= leader.next;
        leader.next=newNode;
        newNode.next=follower;
        this.length++;
    }
    remove(index){
        let leader=this.traverseToIndex(index-1);
        let follower=leader.next.next;
        leader.next=follower;
        this.length--;
    }
    printList(){
        let arr=[];
        let currentNode=this.head;
        while (currentNode.next) {
            arr.push(currentNode.value);
            currentNode=currentNode.next;
        }
        return arr;
    }

    reverse(){
        if(!this.head.next){
            return this.head;
       }
        let firstNode=this.head;
        let secondNode=this.head.next;
        while(secondNode){
                let temp=secondNode.next;
                secondNode.next=firstNode;
                firstNode=secondNode;
                secondNode=temp;
        }
        this.head.next=null;
        this.head=firstNode;
        return this
    }

    traverseToIndex(index){
        let counter=0;
        let currentNode=this.head;
        while (counter !== index) {
            currentNode = currentNode.next
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList= new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2,99)
myLinkedList.remove(2)



console.log(myLinkedList.printList())
console.log(myLinkedList.reverse())