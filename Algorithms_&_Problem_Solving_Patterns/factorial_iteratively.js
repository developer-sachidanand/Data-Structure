// find out the factorial of any number

// 3! = 3*2*1

function factorial(num){
	let result=1;
	while(num){
		if(num===1){
			console.log(result)		
			return result
		
		}
		result = result * num;
		
		num--;
	}
}

factorial(234)