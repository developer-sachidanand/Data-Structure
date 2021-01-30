let result = []; 
let skip;
function DuplicateFinder(arr){
    arr = arr.sort(function(a,b){return a-b});
    for(let i=0,j=1;i<arr.length-1 && j<arr.length;i++,j++){
        if(arr[i]===arr[j]){
            if(result.length===0){
                result.push(arr[i]);
                skip = arr[j];
            }
            else if(skip !== arr[j]){
                skip = arr[i];
                result.push(arr[i]);
            }
        }
    }
    console.log(result)
}
DuplicateFinder([3,3,3,3,3,3,2,1])