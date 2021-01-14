function UnionAndIntersection(farr,sarr){
	var farr_length = farr.length;
	var sarr_length = sarr.length;
	var union = [];
	var intersection = [];
	
	function loop(arr1,arr2,lengthofarray){
		var i=0,j=0;
		if(lengthofarray===0){
			if(arr1.length===0){
				union = arr2;
				console.log(union,intersection);
				return;
			}
			else if(arr2.length===0){
				union = arr1;
				console.log(union,intersection)
				return;
			}
		}
		while(lengthofarray>i && lengthofarray>j){
			if(arr1[i]<arr2[j]){
				union.push(arr1[i]);
				intersection.push(arr1[i]);
				
				i++;
			}
			else if(arr1[i]===arr2[j]){
				union.push(arr1[i]);
				i++;
				j++;
			}
			else if(arr1[i]>arr2[j]){
				union.push(arr2[j]);
				intersection.push(arr1[i]);
				
				j++;
			}
		}
		
		var sliced_array1 = arr1.slice(i);
		var sliced_array2 = arr2.slice(j);
		if(sliced_array1.length===0){
			let k = 0;
			while(sliced_array2.length>k){
				if(!intersection.includes(sliced_array2[l])){
				  intersection.push(sliced_array2[l])
				}
				union.push(sliced_array2[k])
				intersection.push(sliced_array2[k])
				k++;
			}
		}
		else if(sliced_array2.length===0){
			let l=0;
			while(sliced_array1.length>l){
				if(!intersection.includes(sliced_array1[l])){
				  intersection.push(sliced_array1[l])
				}
				union.push(sliced_array1[l])
				l++;
			}
		}
		
		
		console.log(union,intersection)
		
	}
	
	if(farr_length<sarr.length){
		loop(farr,sarr,farr_length)
	}
	else{
		loop(farr,sarr,sarr_length)
	}
}

UnionAndIntersection([1,2,4,5],[2,6,8])
