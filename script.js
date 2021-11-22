// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// possible characters for each array should be:
var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersOptions = "0123456789";
var specialCharactersOptions = "!@#%&*";

// Declarations for the variables should be:
var confirmPassLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecialCharacters;

function generatePassword() {
  var resultArray = ""
  console.log("button clicked");

  // create prompts and confirms for password criteria 
  // prompt 1: length of password ( between 8 and 128) (Must limit no more than 128 and less than 8 option)
  var confirmPassLength = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128, in numeric form.");
  if (confirmPassLength < 8 || confirmPassLength > 128) {
    alert("This must be a number between 8 and 128.");
    return ""
    }

console.log(confirmPassLength);

// prompt 2: Include lowercase? This should cause a boolean - true or false depending on the user input.
confirmLowerCase = confirm("Should it include lowercase characters?" );

// prompt 3: inclide upercase?
confirmUpperCase = confirm("Should it include uppercase characters?");

// prompt 4: include numeric?
confirmNumbers = confirm("Should it include numbers?");

// prompt 5: include special characters?
confirmSpecialCharacters = confirm("Should it include special characters?");


//collect user input
  if (confirmLowerCase) {
    resultArray = resultArray.concat(lowerCaseOptions);

  }

  if (confirmUpperCase) {
    resultArray = resultArray.concat(upperCaseOptions);

  }

  if (confirmNumbers) {
    resultArray = resultArray.concat(numbersOption);

  }

  if (confirmSpecialCharacters) {
    resultArray = resultArray.concat(specialCharactersOptions);

  }
  console.log(resultArray);

// make the password and validate imput- make sure it includes each. 
var randomPass = ""

for(var i = 0; i < confirmPassLength; i++) {
// Must make the password here
  var randomIndex = Math.floor(Math.random() * resultArray.length)
  randomPass +- resultArray[randomIndex]
  }
}  
// Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
