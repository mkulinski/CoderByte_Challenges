function ArithGeoII(arr) {
  //instantiate the arr's common ratio, common difference and a baseline for each.
   var commonRatio = arr[1] / arr[0];
   var commonDifference = arr[1] - arr[0];
   var isArith = true;
   var isGeo = true;
   //check if each number has a common ration
   for (var i = 1;i < arr.length;i++){
       if ((arr[i] / arr[i-1]) !== commonRatio){
           isGeo = false;
           break;
       }
   }
   //check if each number has a common difference
   for (var j = 1;j < arr.length;j++){
       if ((arr[j] - arr[j-1]) !== commonDifference){
           isArith = false;
           break;
       }
   }
   //retern which ever ratio was wonder or -1 for neither
   if (isArith){
       return 'Arithmetic'
   } else if (isGeo){
       return 'Geometric'
   } else {
       return -1
   }
}