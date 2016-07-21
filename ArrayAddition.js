function ArrayAddition(arr) {
   var largestNum = 0;
    var total = 0;

   //find largest number
   for (var i = 0;i < arr.length;i++){
       if (arr[i] > largestNum){
           largestNum = arr[i];
       }
   }
   //find the index of the largest number
   var largestNumIndex = arr.indexOf(largestNum);
   //remove largest num from array
   var newArray = arr.splice(largestNumIndex,1);

   //check if numbers in the array added together are equal to the largest number
   for (var j = 0;j <arr.length-1;j++){
       total += arr[j];
       for (var h = j+1;h < arr.length;h++){
           total += arr[h];
           if(total === largestNum){
               return 'true';
           } else if (total > largestNum){
               total -= arr[h];
           }
       }
       total = 0;
   }
   return 'false';
}