class Node{
    constructor(val){
        this.next=null;
        this.value = val;
        this.prev=null;
    }
}

class DoubleLinkedList{
    constructor(){
       this.head=null;
       this.tail = null; 
       this.length = 0
    }  

    // method to push the node in the linked list
    push(val){

        if(val.length===0){
            return false;
        }
        
        if(!this.head){
            this.head = new Node(val);
            this.tail = this.head;
            this.length++;
            return this;
        }
        var newNode = new Node(val);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this; // it will return the whole list
     }
}

var list = new DoubleLinkedList();

