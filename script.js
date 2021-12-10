// Assignment Code
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var result = [];
var possibleArray = [];
var generateBtn = document.querySelector("#generate");




var passwordLength = window.prompt("Password must be between 8 and 128 characters long");
if (passwordLength >= 8 || passwordLength <= 128) {
  result = true;
} else {
  passwordLength < 8 || passwordLength > 128;
  alert("Password length invalid, Try again");
}

var passwordUpper = confirm("Would you like to add uppercase letters");
for (var i = 0; i < passwordLength; i++) {
  var possibleIndex = Math.floor(Math.random() * upperCase.length);
  var possibleChar = upperCase[possibleIndex];
  possibleArray.push(possibleChar);
}

var passwordLower = confirm("Would you like to add lowercase letters");
for (var i = 0; i < passwordLength; i++) {
  var possibleIndex = Math.floor(Math.random() * upperCase.length);
  var possibleChar = upperCase[possibleIndex];
  possibleArray.push(possibleChar);
}

var passwordSymbols = confirm("Would you like to add symbols");
for (var i = 0; i < passwordLength; i++) {
  var possibleIndex = Math.floor(Math.random() * symbols.length);
  var possibleChar = upperCase[possibleIndex];
  possibleArray.push(possibleChar);
}

var passwordNumeric = confirm("Would you like to add numbers");
for (var i = 0; i < passwordLength; i++) {
  var possibleIndex = Math.floor(Math.random() * upperCase.length);
  var possibleChar = upperCase[possibleIndex];
  possibleArray.push(possibleChar);
}


function generatePassword() {
  return ("generated password");


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}
