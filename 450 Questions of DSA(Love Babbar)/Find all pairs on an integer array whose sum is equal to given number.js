
function PairFound(arr,k){
let result = [];
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===k){
            let singleArr = [arr[i],arr[j]];
            result.push(singleArr);
        }
    }
}
    console.log(result);
}
PairFound(arr=[4,7,2,1,3,9,8],k=5)