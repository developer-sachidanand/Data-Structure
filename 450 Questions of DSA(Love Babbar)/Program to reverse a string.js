function Reverse(str){
    let arr = [];
    let last = str.length - 1;
    // took the character code of every character and pushed into the array
    for (let index = 0; index <= last; index++) {
        let code = str.charCodeAt(index);
        arr.push(code);
        
    }
    // reversed the array of character code
    for (let index = 0; index <= last; index++,last--) {
        let temp = arr[index];
        arr[index] = arr[last];
        arr[last] = temp;
    }
    // concatenated the array of reversed character code and but converted into string before 🙌
    let reversed_string="";
    for (let index = 0; index <arr.length; index++) {
        let k = String.fromCharCode(arr[index]);
        reversed_string=reversed_string.concat(k);
    }
    console.log(reversed_string);

}
Reverse("practice is the key to success");
