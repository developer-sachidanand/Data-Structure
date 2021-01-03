// the problem is we have given a sorted array and we have to return a pair of numbers whose sum is zero using two pointers or value method

function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left]+arr[right];
        if(sum===0){
            return [arr[left],arr[right]]
        }
        if(sum>0){
            right = right-1;
        }
        if(sum<0){
            left = left+1;
        }
    }
    return false;
}

sumZero([-4,-1,-1,-1,2,3])
