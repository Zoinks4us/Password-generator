// Assignment code here
// Define generate passwaord
//Prompt user on capitalization, length (8-128), numbers, special characters



function generatePassword( ) {
  var passUpperCase = window.alert('Click OK to include uppercase characters?')
var passLowerCase = window.prompt('Click OK to include lowercase characters?')
var passLength = window.prompt('How many characters would you like your password to contain?')
var passSpecial = window.prompt('Click OK to include special characters?')
var passNumbers = window.prompt('Click OK to include numeric characters?')

if(passUpperCase =)



  return
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
Math.floor(Math.random() * 10);