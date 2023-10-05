function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfLetters = word.split("")
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString = reverseLetters.join("")

  if(word==reverseString) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  firstly the array of letters is split into a single letters
then the received word is converted into a reversed version of the original
after, the reversed word is joined to an array or a word
then the reversed word and the received word are checked to see if they are similar and true/false values are returned accordingly
*/ 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
