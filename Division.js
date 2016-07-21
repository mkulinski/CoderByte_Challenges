function Division(num1,num2) {
    //instantiates two arrays and a placeholder for the largest number
    var num1Arr = [];
    var num2Arr = [];
    var largestNum = 1;
    //creates an array of all the factors of num1
    for (var i = 0;i <= num1;i++){
        if (num1 % i === 0){
            num1Arr.push(i);
        }
    }
    //creates an array of all the factors of num2
    for (var j = 0;j <= num2;j++){
        if (num2 % j === 0){
            num2Arr.push(j)
        }
    }
    //loops through num1Arr to check if that number is also a fcator in num2arr
    for (var h = 0;h < num1Arr.length;h++){
        var numIndex = num2Arr.indexOf(num1Arr[h]);
        //if a common factor is found and the factor is larger than the previous one, the new factor is now the largest
        if (numIndex !== -1 && num1Arr[h] > largestNum){
            largestNum = num1Arr[h]
        }
    }

    return largestNum;

}