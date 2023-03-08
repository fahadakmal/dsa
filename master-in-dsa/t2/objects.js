let user= {
    age:54,
    name:"fahad",
    magic:true,
    screem:function(){
        console.log("hahah")
    }
}
//When you have a  hash collison it slows down reading and writing O(n/k) where k  is the size of your hash table
user.spell="abra ka dabra";  //O(1)
user.screem()  //O(1)
console.log(user);
