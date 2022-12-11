class MyArray{
    constructor(){
        this.length =0;
        this.data={}
    }
    get(index){
       return this.data[index]
    }
    push(item){
        this.data[this.length]=item;
        this.length++;
    }
    pop(){
        const lastItem=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item=this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index){
         for (let item = index; item < this.length-1; item++) {
            this.data[item]=this.data[item+1];
         }
         delete this.data[this.length-1];
         this.length--;
    }
}

const newArray =new MyArray();
newArray.push("fahad");
newArray.push("you")
newArray.push("my new array pop")

newArray.delete(0);

console.log("🚀 ~ file: ztm-array-implemNentaion.js:12 ~ newArray", newArray);

