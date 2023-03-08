class MyArray{
    constructor(){
        this.length=0;
        this.data={};
    }
    get(index){
        return this.data[index]
    }
    push(item){
         this.data[this.length]=item; 
         this.length++;
         return this.length;
    }
    pop(){
        const lastItem=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        if(index>this.length-1){
        return;
        }
        const item=this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[index]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    
    
}
const newArray=new MyArray();
newArray.push("fahad")
newArray.push("akmal")
newArray.push("khan")
newArray.delete(2)
newArray.push("is")
newArray.push("nice")
newArray.push("person")
console.log(newArray);
