function Linear_Search(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            return i;
        }
   
    }
    return -1;
}

// Linear_Search([2,3,4,5,11,8],8)
Linear_Search(["sachin","sunil","akash","vikas"],"sunil")