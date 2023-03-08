class hashTable{
    constructor(size){
        this.data=new Array(size);
    }

_hash(key){
    let hash=0;
    for (let i = 0; i < key.length; i++) {
        hash=(hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
}   //O(1)

set(key,value)
   {
    const address=this._hash(key);
    if(!this.data[address]){
        this.data[address]=[]
    }
        this.data[address].push([key,value])
        return this.data;
} // o(1)
get(key){
    const address=this._hash(key);
    const currentBucket=this.data[address];
 
    if(currentBucket){
        for (let index = 0; index < currentBucket.length; index++) {
            if(currentBucket[index][0]===key){
                 return  currentBucket[index][1]
            }
        }
    }
    return undefined;
} //if no collision o(1) otherwise o(n/k)

keys(){
    let keys=[];
    if(this.data){
        for (let index = 0; index < this.data.length; index++) {
            const currentAddress=this.data[index]
            if(currentAddress){
                    keys.push(currentAddress[0][0])
            }
        }
    }
    return keys;
}
}
const myHashTable= new hashTable(2);

myHashTable.set("grapes",1000);
myHashTable.set("grapes",1000);
myHashTable.set("balloons","fadh");


// console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());