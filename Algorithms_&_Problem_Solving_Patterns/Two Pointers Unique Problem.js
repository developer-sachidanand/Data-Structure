// In this problem, we have to return the unique number of elements present in an array

function UniqueNumbers(num){
    if(num.length===0){
        return 0;
    }
    let left = 0;
    let right = num.length-1;
    let unique_number = 1
    while(left<right){
        if(num[left]<num[right]){
            unique_number = unique_number+1;
            right = right-1;
        }
    }
    return unique_number;

}
console.log("hi")
UniqueNumbers([1,1,2,2,3])