function ArrangeNegatives(arr){
    var left = 0;
    var right = arr.length-1;
    while(left<right){
        if(arr[left]>=0 && arr[right]<0){
            var temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
            left++;
            right--;
        }
        else if(arr[left]<0 && arr[right]<0){
            left++;
        }
        else if(arr[left]>=0 && arr[right]>=0){
            right--;
        }
		else{
			left++;
		}
		
    }
    console.log(arr);
}

ArrangeNegatives([-11,3,4,9,-19,7,-1,-4,2,3,4,5,6,7,8,-5])