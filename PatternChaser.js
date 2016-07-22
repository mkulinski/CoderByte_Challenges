function PatternChaser(str) {
    //instantiate variables
    var longestRepeat = '';
    var testString = '';
    var counter = 0;
    //loop through str starting at the next letter each time
    while (counter < str.length){
        //add a char to the testString and test to see if it's the longestRepeat
        for (var i = counter;i < str.length;i++){
            testString += str[i];
            if (str.lastIndexOf(testString) !== str.indexOf(testString) && testString.length > longestRepeat.length){
                longestRepeat = testString;
            }
        }
        //reset testString and add one to counter after each loop through
        testString = '';
        counter++;
    }
    //if that are at least two chars in longestRepeat return yes
    if (longestRepeat.length > 1){
        return "yes "+longestRepeat;
    } else {
        return "no "+null;
    }
}