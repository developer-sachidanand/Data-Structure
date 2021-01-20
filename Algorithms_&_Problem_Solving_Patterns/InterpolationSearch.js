function InterpolationSearch(arr,n,x){

    let start = 0; let end = n-1;

    while(start<=end && x >= arr[start] && x<= arr[end]){

        if(start == end){
            if(arr[start]==x){
                return start;
            }
            else{
                return -1;
            }
        }

        let pos = start + Math.floor((((end - start) / (arr[end] - arr[start])) * (x - arr[start])));

        if(arr[pos]== x){
            return pos;
        }

        if(arr[pos] < x){
            start = pos + 1;
        }

        else{
            end = pos - 1;
        }
    }
}

function main(){
    let arr = [10, 12, 13, 16, 18, 19, 20, 21,
        22, 23, 24, 33, 35, 42, 47];
    let n = arr.length;
    let x = 47;

    let index = InterpolationSearch(arr,n,x);

    if(index != -1){
        console.log(`Element is found at index ${index}`);
    }
    else{
        console.log('Element Not Found')
    }
}

main()