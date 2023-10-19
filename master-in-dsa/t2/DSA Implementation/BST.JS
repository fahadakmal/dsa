
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(value){
        this.rootNode=new Node(value);
    }

    insert(value){
        let currentNode=this.rootNode;
        let newNode=new Node(value)
        while(true){
            if(value > currentNode.value){
                if(!currentNode.right){
                    currentNode.right=newNode;
                    return this;
                }
                currentNode=currentNode.right;
            }else {
                if(!currentNode.left){
                    currentNode.left=newNode;
                    return this;
                }else{
                    currentNode=currentNode.left;
                }
             }
    }
}

    lookUp(value){
        let currentNode=this.rootNode;
        while(currentNode){
            if(value > currentNode.value){
                currentNode=currentNode.right;
            }else if(value < currentNode.value) {
                    currentNode=currentNode.left;
             }else if(value === currentNode.value){
                    return currentNode;
             }
        }
        return null;
        }

}