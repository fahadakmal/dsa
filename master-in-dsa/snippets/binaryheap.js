class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
 extractMax(){
  const max=this.values[0];
  const end=this.values.pop();
  if(this.values.length >0){
     this.values[0]=end;
  this.sinkDown();
  }

  return max;
 }
 sinkDown(){
  let idx=0;
  const length=this.values.length;
  const element=this.values[0];
  while (true) {
   let leftIdx=2*idx+1;
   let rightIdx=2*idx+2;
   let left,right;
   let swap=null;

   if(leftIdx<length){
    left=this.values[leftIdx]
    if(left >element){
     swap = leftIdx;
    }
   }
   if(rightIdx < length){
    right=this.values[rightIdx];
        if(
         (swap === null && right >element) || 
         (swap !== null && right>left)
        ){
     swap = rightIdx;
    }
   }

   if(swap === null) break;
   this.values[idx]=this.values[swap];
   this.values[swap]=element;
   idx=swap;
  }
  
 }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

heap.extractMax();


