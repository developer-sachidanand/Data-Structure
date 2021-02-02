function checkForduplicates(str){
    let last = str.length;
    let arr = [];
    for (let index = 0; index<last; index++) {
        arr.push(str[index]);
    }
    let duplicateCharacters = arr.reduce((obj,item)=>{
        if(!obj[item]){
            obj[item] = 0;
            
        }
        obj[item]++;
        return obj;

    },{})
    console.log(duplicateCharacters)
    
}

checkForduplicates("sachidanand")
