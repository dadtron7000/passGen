// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowerCharacters = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var specCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+"]
  var passLength = prompt("enter a number from 8 to 128");
  var hasLower = confirm("use lowercase letters?");
  var hasUpper = confirm("use uppercase letters?");
  var hasNum = confirm("use numbers?")
  var hasSpecial = confirm("use special characters?")
  let output = ``
  console.log(passLength);

  if (hasLower && hasUpper && hasNum && hasSpecial) {
    availableCharacters = lowerCharacters.concat(upperCharacters, numCharacters, specCharacters)
    
    for(let i = 0; i < passLength; i++) {
      output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    
    }
  
  } else if (!hasLower && hasUpper && hasNum && hasSpecial){
      availableCharacters = upperCharacters.concat(numCharacters, specCharacters)

    for(let i = 0; i < passLength; i++) {
      output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
    }   
  } else if (hasLower && !hasUpper && hasNum && hasSpecial) {
      availableCharacters = lowerCharacters.concat(numCharacters, specCharacters)

      for(let i = 0; i < passLength; i++) {
        output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
    }
  } else if (hasLower && hasUpper && !hasNum && hasSpecial) {
      availableCharacters = lowerCharacters.concat(upperCharacters, specCharacters)

      for(let i = 0; i < passLength; i++) {
        output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
    } 
  } else if (hasLower && hasUpper && hasNum && !hasSpecial) {
      availableCharacters = lowerCharacters.concat(upperCharacters, numCharacters)

      for(let i = 0; i < passLength; i++) {
        output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
         
       }
  } else if (hasLower && hasUpper && !hasNum && !hasSpecial) {
    availableCharacters = lowerCharacters.concat(upperCharacters)

    for(let i = 0; i < passLength; i++) {
      output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
     }
  } else if (hasLower && !hasUpper && hasNum && !hasSpecial) {
    availableCharacters = lowerCharacters.concat(numCharacters)

    for(let i = 0; i < passLength; i++) {
      output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
     }
  } else if (hasLower && !hasUpper && !hasNum && hasSpecial) {
    availableCharacters = lowerCharacters.concat(specCharacters)

    for(let i = 0; i < passLength; i++) {
      output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
     }
  } else if (!hasLower && hasUpper && hasNum && !hasSpecial) {
    availableCharacters = upperCharacters.concat(numCharacters)

    for(let i = 0; i < passLength; i++) {
      output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
     }
  } else if (!hasLower && hasUpper && !hasNum && hasSpecial) {
    availableCharacters = upperCharacters.concat(specCharacters)

    for(let i = 0; i < passLength; i++) {
      output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
     }
  } else if (!hasLower && !hasUpper && hasNum && hasSpecial) {
    availableCharacters = numCharacters.concat(specCharacters)

    for(let i = 0; i < passLength; i++) {
      output += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
       
     }
  } else if (!hasLower && !hasUpper && !hasNum && hasSpecial) {

    for(let i = 0; i < passLength; i++) {
      output += specCharacters[Math.floor(Math.random() * specCharacters.length)]
       
     }
  } else if (!hasLower && !hasUpper && hasNum && !hasSpecial) {

    for(let i = 0; i < passLength; i++) {
      output += numCharacters[Math.floor(Math.random() * numCharacters.length)]
       
     }
  } else if (!hasLower && hasUpper && !hasNum && !hasSpecial) {

    for(let i = 0; i < passLength; i++) {
      output += upperCharacters[Math.floor(Math.random() * upperCharacters.length)]
       
     }
  } else if (hasLower && !hasUpper && !hasNum && !hasSpecial) {

    for(let i = 0; i < passLength; i++) {
      output += lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)]
       
     }
  } else {
    alert("pick valid criteria")
  }
  return output
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 