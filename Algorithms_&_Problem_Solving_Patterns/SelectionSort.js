function SelectionSort(arr){
	
	for(let i=0;i<arr.length;i++){
		var minimum = i;
		let checkMinimum = true;
		let incrementer = 0;
		for(let j=i+1;j<arr.length;j++){
			if(arr[j]<arr[minimum]){
				minimum=j;
				checkMinimum = false;
			}
		}
		
		if(!checkMinimum){
			var temp = arr[i];
			arr[i] = arr[minimum];
			arr[minimum] = temp;
		}
		
		
		
	}
	console.log(arr)
}

SelectionSort([6,5,4])