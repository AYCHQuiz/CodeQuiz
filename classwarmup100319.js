//Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

//Ex:
//Input: "noon"
//Output: true

//Input: "horse"
//Output: false

//Input: "racecar"
//Output: true

var isPalindrone = function (str) {
    for (var i = 0; i < str.length; i++) {
        console.log(i);
        console.log(str.length);
        console.log(str.length - (i + 1));
        //Compare the first letter with the last letter
        if (str[i] !== str[str.length - (i + 1)]) {
            return false;
        }
        return true;
    }

}
// Alternative Solutio

var isPalindrone = function(str){
    return.str.split('').reverse().join('') === str;
}