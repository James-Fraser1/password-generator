var specialArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'];
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// End Function to generate the password
function generatePassword() {
  var password = "";
  for(var i=0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Function allowing the following prompts to determine password requirements
function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters fo you want your password to be? (From 8 - 120 characters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Input has to be a number between 8 - 128");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  if (confirm("Would you like uppercase letters in your password")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  if (confirm("Would you like numbers in your password")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (confirm("Would you like special characters in your password")) {
    choiceArr = choiceArr.concat(specialArr);
  }
  return true;
}