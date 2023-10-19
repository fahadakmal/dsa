
class StackWithArray{
    constructor(value){
        this.data=[value];
    }

    push(value){
        this.data.push(value);
    }
    pop(){
        this.data.pop();
    }
    peek(){
        this.data[this.length-1]
    }
}