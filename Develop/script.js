// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLengthPrompt = prompt("how long do you want your password? (enter any number '8'-'128')")
var capsPrompt = prompt("Do you want capital letters? (type 'yes' or 'no') ")
var specialPrompt = prompt("do you want special characters? ( type 'yes' or 'no') ")
var numPrompt = prompt("Do you want numbers? (type 'yes' or 'no') ")
var capsBool = false
var specialBool= false
var numBool = false
var passlength = parseInt (passLengthPrompt)


var specialCharacters = ["!","@","#","$","%","^","&","*","?",".",",","_"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var lowerUpper = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerNumber =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"]
var lowerSpecial = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","?",".",",","_"]
var lowerUpperNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
var lowerUpperspecial = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",".",",","_"]
var lowerNumSpecial = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","?",".",",","_"]
var lowerUpperSpecialNum= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",".",",","_","1","2","3","4","5","6","7","8","9","0"]



//capsBoolean
if (capsPrompt = "yes"){
  capsBool = true
}
else {
  capsBool=false
}
//specialBoolean
if (specialPrompt = "yes"){
  specialBool = true
}
else {
  specialBool=false
}
//numBoolean
if (numPrompt = "yes"){
  numBool = true
}
else {
  numBool=false
}


// Write password to the #password input


function generatepassword() { 
  
  var randomLowerUpperSpecialNum  = lowerUpperSpecialNum [Math.floor(Math.random()* lowerUpperSpecialNum.length)]
  var randomLowerUpperSpecial = lowerUpperspecial [Math.floor(Math.random()* lowerUpperspecial.length)]
  var randomLowerUpperNum = lowerUpperNum [Math.floor(Math.random()* lowerUpperNum.length)]
  var randomLowerNumSpecial = lowerNumSpecial [Math.floor(Math.random()* lowerNumSpecial.length)]
  var randomLowerSpecial = lowerSpecial [Math.floor(Math.random()* lowerSpecial.length)]
  var randomLowerNumber = lowerNumber [Math.floor(Math.random()* lowerNumber.length)]
  var randomLowerUpper = lowerUpper [Math.floor(Math.random()* lowerUpper.length)]
  var randomLowerLetters = lowerLetters [Math.floor(Math.random()* lowerLetters.length)]
  
  var passArray=[""]

  if ( capsBool == true && specialBool == true && numBool == true ) { 
    for (i=0; i<passlength; i++) {

      passArray.splice(0,0,randomLowerUpperSpecialNum)
      
    }

  } else if ( capsBool == true && specialBool == true && numBool == false ) { 
    for (i=0; i<passlength; i++) {

      passArray.splice(0,0,randomLowerUpperSpecial)
      
    }
  }
  else if ( capsBool == true && specialBool == false && numBool == true ) { 
    for (i=0; i<passlength; i++) {

      passArray.splice(0,0,randomLowerUpperNum)
      
    }
  }
  else if ( capsBool == false && specialBool == true && numBool == true ) { 
    for (i=0; i<passlength; i++) {

      passArray.splice(0,0,randomLowerNumSpecial)
      
    }
  }
  else if ( capsBool == false && specialBool == true && numBool == false ) { 
    for (i=0; i<passlength; i++) {

      passArray.splice(0,0,randomLowerSpecial)
      
    }
  }
  else if ( capsBool == false && specialBool == false && numBool == true ) { 
    for (i=0; i<passlength; i++) {

      passArray.splice(0,0,randomLowerNumber)
      
    }
  }
  else if ( capsBool == true && specialBool == false && numBool == false ) { 
    for (i=0; i<passlength; i++) {

      passArray.splice(0,0,randomLowerUpper)
      
    }
  }
  else if ( capsBool == false && specialBool == false && numBool == false ) { 
    for (i=0; i<passlength; i++) {

      passArray.splice(0,0,randomLowerLetters)
      
    }
  }
  var stringPassword = passArray.toString 
  stringpassword = stringPassword.replace (",","")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());




   