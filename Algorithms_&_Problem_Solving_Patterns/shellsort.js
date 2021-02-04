function shellSort(unsorted_array){

    let length_of_array = unsorted_array.length;

    // showing the array before sorting
    console.log(unsorted_array);

    for (let gap = Math.floor(length_of_array/2); gap > 0; gap = gap/2) {
        
        for (let i = gap; i < length_of_array; i++) {
            
            let temp = unsorted_array[i];
            let j;

            for (j = i; j>=gap && unsorted_array[j-gap] > unsorted_array[j]; j = j-gap){
                
                // swapping the elements if they are unsorted
                unsorted_array[j] = unsorted_array[j-gap];
                unsorted_array[j-gap] = temp;
            }
            
        }
        
    }

    // CAUTION 🚨🚨 because now the unsorted array not remained unsorted
    // Don't go with the name of array 🤣🤣🤣
    
    console.log(unsorted_array);
}

shellSort([12,34,54,2,3])