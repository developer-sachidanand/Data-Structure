class Node{
	constructor(value){
		this.right = null;
		this.value = value;
		this.left = null;
	}
}

class BinarySearchTrees{
	constructor(){
		this.root = null;
	}
	insert(value){
		var newNode = new Node(value);
		if(this.root===null){
			this.root = newNode;
			return this;
		}else{
			var current = this.root;
			while(true){
				if(value === current.value){
					return false;
				}
				if(value<current.value){
					if(current.left===null){
						current.left = newNode;
						return this;
					}else{
						current = current.left;
					}
				}else if(value > current.value){
					if(current.right === null){
						current.right = newNode;
						return this;
					}else{
						current = current.right;
					}
				}
			}
		}
	}
}