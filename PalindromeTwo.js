function PalindromeTwo(str) {
  //makes all letters in str lowercase and removes any non-letter chars
    str = str.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
   //checks if the reverse of str is equal to str
   if (str === str.split('').reverse().join('')){
       return true;
   } else {
       return false;
   }
}