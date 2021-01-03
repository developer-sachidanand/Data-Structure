// this is an example of function bind() method
// function bind method is helpful when we want to borrow a method of object to use in other object.
// the bind method returns a function which we can call to get the output...
let name = {
    firstname:"Sachidanand",
    lastname:"Dwivedi",
    printFullName:function(state,city){
        console.log('My Name is '+this.firstname+" "+this.lastname+" . I live in state "+state+" , city "+city);
    }
}

let name2 = {
    firstname:"Bambushai",
    lastname:"Boshai"
}

let MyFullName = name.printFullName.bind(name2,"Punjab","Ludhiana");
MyFullName()