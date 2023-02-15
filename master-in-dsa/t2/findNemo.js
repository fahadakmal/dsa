


const nemo=["nemo"];

function findNemo(nemo){
    let t0=performance.now();
    for (let item = 0; item < nemo.length; item++) {
        if(nemo[item])
        {
            console.log("Item Found")
        }
    }
    let t1=performance.now();
    console.log(t1-t0)
}

findNemo(nemo)

//finding nemow function will have O(n) Linear Time
