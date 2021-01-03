function Binary_Search(list,value){
   let left = 0;
   let right = list.length-1;
   let middle = Math.floor((left+right)/2);
    
   while(list[middle]!==value && left!==right){
       if(value<list[middle]){
           right = middle-1;
           middle = Math.floor((left+right)/2);
       }
       else{
           left = middle+1; // 4+1+1
           middle = Math.floor((left+right)/2);
       }
   }
   if(list[middle]!==value){
       return "Value doesn't exist in array";
   }
   return middle;
}

Binary_Search([11,21,32,44,52,74,79],74)
