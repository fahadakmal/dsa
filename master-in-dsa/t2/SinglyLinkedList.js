//10 ->5 ->16
// let myLinkedList={
//     head:{
//         value:10,
//         next:{
//             value:5,
//             next:{
//                 value:16,
//                 next:null
//             }
//         }
//     }
// };
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
        //5
        const newNode=new Node(value)
         this.tail.next=newNode;
         this.tail=newNode
         this.length++;
         return this;
    }
    prepend(value){
        const newNode=new Node(value)
        newNode.next=this.head;
        this.head= newNode;
        this.length++;
        return this;
    }
    //10 -> 5 -> 11 -> 16
    insert(index,value){
        if(index >= this.length){
            this.append(value);
        }
        const newNode=new Node(value);
        const leader=this.traverseToIndex(index-1)
        // [10,5,99,11,16];
        const follower=leader.next;
        leader.next=newNode;
        newNode.next=follower
        this.length++
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
    remove(index){
        const leader=this.traverseToIndex(index-1);
        const nextNode=leader.next.next;
        leader.next=nextNode;
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
        if(!this.head.next){
             return this.head;
        }
    let first=this.head;
    let second=first.next;
    while(second){
        const temp=second.next;
        second.next=first;
        first=second;
        second=temp;
    }
    this.head.next=null;
    this.head=first;
    return this
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