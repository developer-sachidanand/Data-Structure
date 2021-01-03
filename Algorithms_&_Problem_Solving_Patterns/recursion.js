function countDown(num){
	if(num<=0){
		return "All done"
	}
	console.log(num)
	--num;
	countDown(num)
}

countDown(3)