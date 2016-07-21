function LetterCount(str) {
  //turns str into an array and instantiates an empty string and a counter
    var strToArray = str.split(' ');
    var largestWord = '';
    var letterCounter = 0;
    //loops through each word in strToArray
    for (var word = 0;word < strToArray.length;word++){
        var counter = 0;
        //loops through each letter of each word
        for (var i = 0;i < strToArray[word].length; i++){
            for (var j = i+1;j < strToArray[word].length; j++){
              //checks to see if there are duplicate letters
                if (strToArray[word][i] === strToArray[word][j]){
                    counter++
                }
            }
        }
        //if a letter has the most duplicates it is now the largestWord
        if (counter > letterCounter){
            largestWord = strToArray[word];
            letterCounter = counter;
        }
    }
    //if there are no duplicate letters -1 is returned
    if (largestWord){
        return largestWord;
    } else {
        return -1
    }
}