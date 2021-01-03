function frequencyCounter(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]){
            return false;
        }
        
    }
    return true;
   
}

frequencyCounter([2,3,4,4,5,6],[16,4,3,16,25,36])


// this program has BigO(n) this is better way instead of nested loops.