function RotateArray(arr){
	var end = arr.length-1;
	function swap(arr,i,j){
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	for(let i =0;i<end;i++){
		swap(arr,i,end);
		
	}
	console.log(arr)
}

RotateArray([2,4,5,7,11,21,43,67,90])