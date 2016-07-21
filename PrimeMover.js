function PrimeMover(num) {
  //instantiate an empty array and a large number
   var numCeiling = num * num;
   var primeArray = [];
   //loop through every number from 2 to numCeiling
   for (var i = 2;i< numCeiling; i++){
      //if a number is prime push it to primeArray
       if (isPrime(i)){
           primeArray.push(i);
       }
   }
   //returns the nth prime number
   return primeArray[num-1];
}

//function to check if a number is prime
function PrimeTime(number){
   for (var i = 2;i < number;i++){
       if (number % i === 0){
           return false;
       }
   }
   return true;
}