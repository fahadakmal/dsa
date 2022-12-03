console.log('snipper');


function countNUM(num) {
    if(num <=0 ){
        console.log('all done');
        return;
    }else{
        console.log(num);
        num--;
        countNUM(num);
    }
    
}

countNUM(8);