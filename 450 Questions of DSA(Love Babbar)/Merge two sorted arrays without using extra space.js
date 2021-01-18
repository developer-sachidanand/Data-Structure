function merge(firstArray,secondArray){
	
	function swap(left,right,i,j){
		let temp = left[i];
		left[i]= right[j];
		right[j] = temp;
	}
	
    for(let i = 0;i<firstArray.length;i++){
		for(let j = 0;j<secondArray.length;j++){
			if(secondArray[j]<firstArray[i]){
				swap(firstArray,secondArray,i,j);
			}
		}
	}
	
	secondArray.sort(function(a,b){return a-b})
	
	console.log(firstArray,secondArray);
			
}
merge([1,7,9],[2,4,6])