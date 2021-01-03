function FrequencyCounter(input1,input2){
    for(let i=0;i<input1.length;i++){
        for(let j=0;j<input2.length;j++){
            let a = input1[i];
            let k = 0;
            if(a*a !== input2[j]){
               k++;
               if(k==input2.length){
                   return false;
               }
            }

        }
    }
    return true;
}

FrequencyCounter([1,2,3,4,5],[16,9,23,4,1])
