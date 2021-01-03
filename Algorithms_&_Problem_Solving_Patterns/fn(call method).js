// this is an example of function call method
// function call method is helpful when we want to borrow a method of object to use in other object.
// the only difference between call and apply method is that apply method takes arguments in the single array
let name = {
    firstname:"Sachidanand",
    lastname:"Dwivedi",
    printFullName:function(state,city){
        console.log('My Name is '+this.firstname+" "+this.lastname+" . I live in state "+state+" , city "+city);
    }
}

let name2 = {
    firstname:"Lucky",
    lastname:"Dwivedi"
}

name.printFullName.call(name2,"Punjab","Ludhiana");