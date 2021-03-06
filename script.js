// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];


function generatePassword() {
  var passwordContainer = [];
  var finalPassword = "";
  var length = prompt("How many characters do you want in your password?");
  if (length < 8 || length > 128) {
    alert(
      "Your password must have more than 8 characters and less than 129 characters, please try again"
    );
    return;
  }
  var lowercase = confirm("Do you want lowercase letters in your password? ");
  if (lowercase) {
    passwordContainer = passwordContainer.concat(lowerCaseArray);
  }
  var uppercase = confirm(
    "Do you you want uppercase letters in your password? "
  );
  if (uppercase) {
    passwordContainer = passwordContainer.concat(upperCaseArray);
  }
  var numeric = confirm("Do you want numbers in your password? ");
  if (numeric) {
    passwordContainer = passwordContainer.concat(numericArray);
  }
  var special = confirm("Do you want special characters in your password? ");
  if (special) {
    passwordContainer = passwordContainer.concat(specialArray);
  }
  if (passwordContainer.length === 0) {
    alert("You must select at least one parameter");
    return;
  }

  for (var i = 0; i < length; i++) {
    var randomIdx = Math.floor(Math.random() * passwordContainer.length);

    var randomChar = passwordContainer[randomIdx];

    finalPassword += randomChar;
  }
  return finalPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
