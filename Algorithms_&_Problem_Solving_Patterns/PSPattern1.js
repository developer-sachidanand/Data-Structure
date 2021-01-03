// we have two arrays as input [1,2,3] and [9,1,4]
// we have to check that one of the two arrays consists of square of second array. and return true if it happens else 
// return false.

// 1. check whether two arrays are of equal length or not.
// 2.

function ArraySquareChecker(a1,a2){
    // checking if the length of the both arrays is same or not
    if(a1.length !== a2.length){
        return false;
    }
    // checking if the correct square number is present in the second array in correct frequency or not.
    else{
        for(let i=0;i<a1.length;i++){
            let orderIndex = a2.indexOf(a1[i] ** 2);
            if(orderIndex===-1){
                return false;
            }
            else{
                a2.splice(orderIndex,1);             
            }
   
        }
        // resulting out the message for the perfect match for the square in the second array
        if(a2.length===0){
            return true;
        }
    }
}

ArraySquareChecker([1,2,1],[4,4,1])
