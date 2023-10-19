class HashTable{
    constructor(size){
        this.data=new Array(size);
    }

    _hash(key){
        let hash=0;
        for (let i = 0; i < key.length; i++) {
            hash=(hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key,value){
        let address=this._hash(key);
        if(!this.data[address]){
            this.data[address]=[];
        }
        this.data[address].push([key,value])
        return this.data;
    }

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
    }

    keys(){
        let keys=[];
        if(this.data){
            for (let index = 0; index < this.data.length; index++) {
                const address = this.data[index];
                if(address){
                    keys.push(address[0][0])
                }
            }
        }
        return keys;
    }
}

const myHashTable=new HashTable(50);