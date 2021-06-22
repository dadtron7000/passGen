// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var alphaCharacters = [lowerCharacters = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], upperCharacters = ["A", "B", "C",
"D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], specCharacters = ["!", "@", "#", "$", "%",
"^", "&", "*", "-", "+"]];
  var alphaLength = lowerCharacters.length;
  var numlength = numCharacters.length;
  var passLength = prompt("enter a number from 8 to 128");
  var hasLower = confirm("use lowercase letters?");
  var hasUpper = confirm("use uppercase letters?");
  var hasNum = confirm("use numbers?")
  var hasSpecial = confirm("use special characters?")
  let output = ``
  console.log(passLength);

  if (hasLower && hasUpper && hasNum && hasSpecial) {
    
  for(let i = 0; i < passLength; i++) {
   output += alphaCharacters[Math.floor(Math.random() * alphaCharacters.length)][Math.floor(Math.random() * alphaLength), Math.floor(Math.random() * numlength)]
    
  }
  return output
  } else if (!hasLower && hasUpper){
    for(let i = 0; i < passLength; i++) {
      output += upperCharacters[Math.floor(Math.random() * upperCharacters.length)]
       
     }
     return output
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 