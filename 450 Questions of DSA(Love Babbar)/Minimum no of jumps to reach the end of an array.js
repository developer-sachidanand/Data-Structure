function MinJumps(arr){
	let n=0;
	let k=0;
	while(n<=arr.length-1){
		if(arr[n]===0){
			console.log("No path exists further");
			return; 
		}
		n = n + arr[n];
		k++;
	}
	console.log(k);
}

MinJumps([1,3,5,8,1,2,6,7,6,8,9])