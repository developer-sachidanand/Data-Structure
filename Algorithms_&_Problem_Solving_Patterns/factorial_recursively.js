function factorial(number){
	if(number===1){
		return 1;
	}
	console.log(number)
	console.log( number * factorial(number-1))
}

factorial(3)