function CheckForPalindrome(str){
    // 🧨🧨 It is case-sensitive for characters 🤣🤣🤣🤣
    let last = str.length-1;
    for (let i = 0,j=last; i < j; i++,j--) {
        if(str[i] !== str[j]){
            console.log('It is not a palindrome.');
            return;
        }
    }
    console.log('It is a palindrome.')
    return;
}

CheckForPalindrome("ABCDCBa")