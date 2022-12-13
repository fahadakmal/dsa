class Hashtable{
    constructor(size){
      this.data = new Array(size)
    }

    _hash(key){
        let hash=0;
        for (let index = 0; index < key.length; index++) {
            hash=(hash+key.charCodeAt(index)+index) % this.data.length;
            
        }
        return hash;
    } //O(N) but fast we can consider it as O(1)
    set(key,value){
        let address=this._hash(key);
        if(!this.data[address])
        {
            this.data[address]=[];
        }
            this.data[address].push([key,value]);
        return this.data;
    } //O(1)
    get(key){
        let address=this._hash(key);
        const currentBucket=this.data[address];
        if(currentBucket){
           for (let index = 0; index < currentBucket.length; index++) {
            const element = currentBucket[index];
            if(element[0] === key){
                return element[1];
            }            
           }
        } //0(1) if thee will be no collison
            return undefined;
    }
    keys(){
        const keysArray=[];
        for (let index = 0; index < this.data.length; index++) {
            const currentBucket = array[index];
            if(currentBucket){
                for (let i = 0; i < currentBucket.length; i++) {
                 const element = currentBucket[i];
                 if(element[0] === key){
                     return element[1];
                 }            
                }
             } 
            
        }
    }
}

const myHashTable=new Hashtable(2);
myHashTable.set('grapes',10000) 
myHashTable.set('apples',54)
myHashTable.set('appes',54)

console.log(myHashTable.get('grapes'))