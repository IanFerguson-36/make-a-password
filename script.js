// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericArray=["0","1","2","3","4","5","6","7","8","9"];
var specialArray=["!","@","#","$","%","^","&","*"]
var passwordContainer=[]

// Write password to the #password input (Password Conditions)
function generatePassword(){
  var length=prompt("How many characters do you want in your password?")
  if(length<8 || length>128){
      alert("Must be greater than 8 and less than 129, please try again")
      return;
  }
  var lowercase=confirm("Do you want any lowercase characters? ")
  if(lowercase){
    passwordContainer=passwordContainer.concat(lowerCaseArray)

  }
  console.log(passwordContainer);
  
  var uppercase=confirm(" ")
  var numeric=confirm(" ")
  var special=confirm(" ")

}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
