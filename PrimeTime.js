function PrimeTime(number){
  //loop through every number less than number
   for (var i = 2;i < number;i++){
        //if a number is divisible by number return false
       if (number % i === 0){
           return false;
       }
   }
   return true;
}