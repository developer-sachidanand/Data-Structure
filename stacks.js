class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Stack{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val){
		var newNode = new Node(val);
		if(!this.first){
			this.first = newNode;
			this.last = newNode;
		}
		else{
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		++this.size
		return this;
	}
	
	pop(){
		if(!this.first){
			return null;
		}
		var temp = this.first;
		if(this.first === this.last){
			this.last = null;
		}
		this.first = this.first.next;
		--this.size;
		return temp.value;
	}
}

var newstack = new Stack();
newstack.push(100)
newstack.push(200)
newstack.push(300)

