function MaxSubArray(arr){
	let max_so_far = 0;
	let final_max = 0;
	for(let i = 0;i<arr.length;i++){
		max_so_far = max_so_far + arr[i];
		if(max_so_far<0){
			max_so_far = 0;
		}
		
		if(max_so_far>final_max){
			final_max = max_so_far;
		}
	}
	console.log(final_max);
}

MaxSubArray([1, 2, 3, -2, 5])