// Assignment code here
// Define generate passwaord
//Prompt user on capitalization, length (8-128), numbers, special characters

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];

var specCharacters = [".","\\", ":", ";", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", "<", ">", "=", "?", "@", "^", "_", "~",];


 Math.floor(Math.random() * 10);
 window.confirm('Click OK to include uppercase characters?')
 window.confirm('Click OK to include lowercase characters?')

 window.confirm('Click OK to include special characters?')
 window.confirm('Click OK to include numeric characters?')

function alphaChoice() {

}

function getRandomAlpha() {
   Math.floor(Math.random() * alphabet.length);
}

function getRandomSpec() {
  Math.floor(Math.random() * specCharacters.length);
}


function generatePassword( ) {
  var passUpperCase = alphabet.toUpperCase[getRandomAlpha()]
  var passLowerCase = alphabet[getRandomAlpha()]
  var passLength =  window.prompt('How many characters would you like your password to contain?')
  var passSpecial = specCharacters[getRandomSpec()]
  var passNumeric = 
}


  

// Get references to the #generate element
// This targets the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // This refernences the text area
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// returns a random integer from 0-9
