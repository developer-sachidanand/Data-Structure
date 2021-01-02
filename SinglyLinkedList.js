// defining the structure of node..help us to create a new element for Linked-List
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // Instance method to push node in the linked list
    push(val){
        if(val===undefined){
            return;
        }
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // to traverse the linked list
	
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.value)
            current = current.next;
        }
    }
    
    // to pop the values from the linked list

    pop(){
        
        if(!this.head){
            return undefined;
        }
       
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
         if(this.length===0){
            this.head = null;
            this.tail = null;
        } 
        return current;

    }
	
	 // to remove the element from the front of the linked list

    shift(){
        if(!this.head){
            return undefined;
        }

        var temp = this.head;
        this.head = this.head.next;

        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        return temp;

    }

    // to push the element from the starting point of the linked list

    unshift(val){
        if(val===null||val.length===0){
            return "enter a value"
        }
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
           newNode.next = this.head;
           this.head = newNode; 
        }
        this.length++;
        return this;
        
    }
	
	// get method will accept an index and return the value of the node
    // present at that index.
    get(index){
        // to check if the user entered a negative index
        if(index<0 || index>=this.length){
            return "enter a correct index";
        }

        // if user enter a string in the index
        else if(typeof(index)===typeof("stringchecker")){
            return "Index should be a non-negative number"
        }

        // return the value present in the entered index
         var counter = 0; 
         var current = this.head;
         var indexValue = current;
         while(counter<=index){
             indexValue = current; 
             current = current.next;
             counter++;
         }
         return indexValue;

    }

    // set method accept index and value and will update the value of the node at that index

    set(index,val){
        var currentNode = this.get(index);
        if(currentNode){
            currentNode.value = val;
            return true;
        }
        return false;
    }
	
	 // Insert method will accept index and value and will insert the value
    // at specified index and the value present before at that index
    // will move to next index.

    insert(index,val){

        if(index < 0 || index >= this.length || val.length===0){
            return false;
        }

        else if(index===0){
            this.unshift(val);
            return true;
        }
        else if(index===this.length-1){
            this.push(val)
            return true;
        }
        
        // if user want to enter in between somewhere at linked list
        var prevIndexNode = this.get(index-1);
        var prevIndexNodeNext = prevIndexNode.next;
        var newNode = new Node(val);
        prevIndexNode.next = newNode;
        newNode.next = prevIndexNodeNext;
        this.length++;
        return true;
         
    } 
	
	// remove method will accept index and will remove the
    // value present at that index

    remove(index){

        if(index>=this.length || index<0){
            return false;
        }
        else if(!this.head){
            return "list is empty"
        }
        else if(index===this.length-1){
            this.pop();
            return true;
        }
        else if(index===0){
            this.shift();
            return true;
        }

        // if user wants to remove in between somewhere at list
        var prevIndexNode = this.get(index-1);
        var currentNodeNext = this.get(index).next;
        prevIndexNode.next = currentNodeNext;
        this.length--;
        return true;
        

    }
	
	
	  // reverse method will reverse the linked list 
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev=null;
        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}


//let newList = new SinglyLinkedList();
//newList.push(77)
//newList.push(10)
//newList.push(12)


