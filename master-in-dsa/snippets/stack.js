
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        
        this.size--;
        return  temmp.val;
;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp =this.first;
            this.first=newNode;
               newNode.next = temmp;
        }

        return ++this.size;
    }
}

var list = new Stack()









 