// Assignment Code
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var result = [];
var possibleArray = [];
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = window.prompt("Password must be between 8 and 128 characters long");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length invalid, Try again")
    return;
  }

  var passwordUpper = confirm("Would you like to add uppercase letters");
  if (passwordUpper === true) {
    for (var i = 0; i < upperCase.Length; i++) {
      var possibleChar = upperCase[i];
      possibleArray.push(possibleChar);
    }
  }
  var passwordLower = confirm("Would you like to add lowercase letters");
  if (passwordLower === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      var possibleChar = lowerCase[i];
      possibleArray.push(possibleChar);
    }
  }
  var passwordSymbols = confirm("Would you like to add symbols");
  if (passwordSymbols === true) {
    for (var i = 0; i < symbols.length; i++) {
      var possibleChar = symbols[i];
      possibleArray.push(possibleChar);
    }
  }
  var passwordNumeric = confirm("Would you like to add numbers");
  if (passwordNumeric === true) {
    for (var i = 0; i < numeric.length; i++) {
      var possibleChar = numeric[i];
      possibleArray.push(possibleChar);
    }
  }
  console.log("possibleArray", possibleArray)
  for (var i = 0; i < passwordLength; i++) {
    var possibleIndex = Math.floor(Math.random() * possibleArray.length);
    var possibleChar = possibleArray[possibleIndex];
    result.push(possibleChar);
  }

  console.log("result", result);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = result.join("");
}

generateBtn.addEventListener("click", writePassword);

