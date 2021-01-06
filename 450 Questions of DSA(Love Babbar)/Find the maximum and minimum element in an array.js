function Min_Max(arr){
    let minimum=arr[0];
    let maximum=arr[0];
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]>maximum){
            maximum = arr[i];
        }
        if(arr[i]<minimum){
            minimum = arr[i]
        }
    }
    return {Max_Value:maximum,Min_Value:minimum};
}

Min_Max([16,10,17,11,9,1,21,0,-1,-11,-2,-7,84,87,91,1001,1001,999,-8,-4,1007])
