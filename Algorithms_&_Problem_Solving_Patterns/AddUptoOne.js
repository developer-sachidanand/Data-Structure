function addUptoOne(n){
    let total = 0;
    for (let index = 0; index <= n; index++) {
        total+=index;
        
    }
    return total;
}
let t1 = performance.now();
addUptoOne(10000000000)
let t2 = performance.now();
console.log(`Estimated time: ${(t2-t1)/1000} seconds`)
