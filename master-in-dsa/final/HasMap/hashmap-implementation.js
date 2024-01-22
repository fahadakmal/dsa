class MyHashMap{
    constructor(size){
        this.data=new Array(size);
        this.length=size;
    }
//[[[key,value],[key,value]],[],[],[]]

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash = (hash + key[i].charCodeAt(index) *i) % this.length;
        }
        return hash;
    }
    access(){ //O(n)

    }
    insert(key,value){ //O(1)
        //input will be only string
        //convert key to the hash function
        const index=this._hash(key);
        if(!this.data[index]){
            this.data[index]=[];
        }
        this.data[index].push([key, value]);
        return this.data;
        // check if the value at index already exist 
            //if exist just push in the value of that index
            //else create a new array and store it there
        //output will be whole object

    }
    delete(key){ //O(1)
        const index=this._hash(key);
        if(!this.data[index]){
            return "undefined"
        }
        this.data[index]=[];
    }
    search(key){ //O(1)
        const hash=this._hash(key);
        let bucket=this.data[hash];
        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i][0]  === key){
                return bucket[i][1]
            }
        }
        return undefined;
    }
}
// put data on indexes in hashmap
  //create e memory 
  //use the property name and convert it into a particular index
  //then save data on that index
