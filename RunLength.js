function RunLength(str) {
    //instantiate an empty array and a counter
    var outArray = [];
    var counter = 0;

    for (var i = 0;i < str.length;i++){
        //loop adds one to counter
        counter++;
        //if the char is not in outArray, it is push into outArray with a 1 before it
        if (str[i] !== str[i+1]){
            outArray.push(counter,str[i]);
            counter = 0;
        }
    }
    //turn outArray into a string and return
    return outArray.join('')
}