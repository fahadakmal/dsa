//{value:"",next:->}
                    //{value:"",next:->}
                                        //{value:"",next:->}
class Node{
    constructor(value,next){
        this.value=value;
        this.next=null;
    }
}    

class LinkedList{
    constructor(value){
        this.root=new Node(value)
    }

    append(value){
     let newNode=new Node(value);
        this.root.next=newNode;
        return newNode
    }

    prepend(value){
        let newNode=new Node(value);
        
    }

    insert(index,value){
        //get the leading element
    let newNode=new Node(value);
    let leader=this.traverse(index-1);
    let follower=leader.next;
    leader.next=newNode;
    newNode.next=follower;
        return newNode;       
    }

    traverse(index){
        let currentNode=this.root;
        let counter=0
        while (currentNode) {
            if(counter === index){
                return currentNode;
            }
            counter++;
            currentNode=currentNode.next;
        }
        
     }
    search(){

    }
    delete(){

    }

    access(){

    }
    
}

const myLinkedList=new LinkedList("a");
myLinkedList.append("b")