
// this function will merge the splitted parts with sorting in ascending way
function Merge(arr1,arr2){
    let results = [];
    let i=0;let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            results.push(arr1[i]);
            i++;
        }
        else{
            results.push(arr2[j]);
            j++
        }
    }

    while(i<arr1.length){
        results.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// this function will split the array using recursion and return the final sorted array.

function MergeSort(arr){
    if(arr.length<=1) return arr;
        let mid = Math.floor(arr.length/2);
        let left = MergeSort(arr.slice(0,mid));
        let right = MergeSort(arr.slice(mid));
        return Merge(left,right);
}

MergeSort([6,3,11,4,9,0,17,13])