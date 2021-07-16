// Here are the list of variables
var dialogHeader = document.querySelector("#dlgHeader");
var inputEl = document.querySelector("#lengthEl");

// variables for the custom made prompt(alert) boxes
var dialogBox = document.querySelector("#prompt-box");
var dialogBox1 = document.querySelector("#prompt-box1");
var dialogBox2 = document.querySelector("#prompt-box2");
var dialogBox3 = document.querySelector("#prompt-box3");
var dialogBox4 = document.querySelector("#prompt-box4");

// variable for the buttons
var generateBtn = document.querySelector("#generate");
var inputEnter = document.querySelector("#inputEnter");

var yesSymbolBtn = document.querySelector("#yesSymbolBtn");
var noSymbolBtn = document.querySelector("#noSymbolBtn");

var yesNumberBtn = document.querySelector("#yesNumberBtn");
var noNumberBtn = document.querySelector("#noNumberBtn");

var yesBtnUcase = document.querySelector("#yesBtnUcase");
var noBtnUcase = document.querySelector("#noBtnUcase");

var yesBtnLcase = document.querySelector("#yesBtnLcase");
var noBtnLcase = document.querySelector("#noBtnLcase");

var lengthEl = document.querySelector("#lengthEl");
var resultEl = document.querySelector("#password");


var selected;
var getNumber;
//variable container for selected charcters
var symbolSelection;
var numSelection;
var ulSelection;
var llSelection;
//variable container for not-selected charcters
var noSymbol;
var noNumber;
var noUL;
var noLL;

// Alert message when no nay characters type are selected
var message = "You have not selected anything!!";
//Arrys which will use to get actual passwords
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symBol = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "+", "-", "_", "/", "=",];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// It will capitalize all the small letters
var capitalize = function (small) {
  return small.toUpperCase();
}

//Capitalized letters
var UpperLetter = lowerLetter.map(capitalize);


//First, this prompt will ask length of the passwords//
generateBtn.addEventListener('click', () => {
  if (dialogBox.style.display === 'none') {
    dialogBox.style.display = 'block';
  } else {
    dialogBox.style.display = 'none';
  }

})


//User prompt to enter the required length of passwords//
inputEnter.addEventListener('click', function () {
  dialogBox.style.display = "none";
  dialogBox1.style.display = "block";

})

//Symbol selcetion prompt//
yesSymbolBtn.addEventListener('click', function () {
  dialogBox1.style.display = "none";
  dialogBox2.style.display = "block";

  symbolSelection = symBol;
  console.log(symbolSelection);

})

//This buttons skip the symbol selection
noSymbolBtn.addEventListener('click', function () {
  dialogBox1.style.display = "none";
  dialogBox2.style.display = "block";

  noSymbol = 1;


})

//Number  selection prompt//
yesNumberBtn.addEventListener('click', function () {
  dialogBox2.style.display = "none";
  dialogBox3.style.display = "block";
  numSelection = number;

})


//This buttons skip the number selection
noNumberBtn.addEventListener('click', function () {
  dialogBox2.style.display = "none";
  dialogBox3.style.display = "block";

  noNumber = 1;

})


// Uppercase selection prompt//
yesBtnUcase.addEventListener('click', function () {
  dialogBox3.style.display = "none";
  dialogBox4.style.display = "block";

  ulSelection = UpperLetter;
  console.log(ulSelection);

})

//This buttons skip the capital letter selection
noBtnUcase.addEventListener('click', function () {
  dialogBox3.style.display = "none";
  dialogBox4.style.display = "block";

  noUL = 1;

})


//Additional variables to store generated passwords
var generatedPassword = [];
var totalSelected;
var results;

// Lowerrcase slection prompt and final results//
// Also this is the final prompt which gives the generated passwords.
yesBtnLcase.addEventListener('click', function () {
  dialogBox4.style.display = "none";
  llSelection = lowerLetter;
  console.log(llSelection);
  allDone(final);
})


var final = ('');
// Function to generate the random passwords
function allDone(final) {

  selected = [].concat(symbolSelection, ulSelection, llSelection, numSelection);

  // It takes the value of length of password that user provided 
  var getNumber = document.getElementById("lengthEl").value;
  console.log(getNumber);

  for (var i = 0; i < getNumber; i++) {
    var pickChoices = selected[Math.floor(Math.random() * selected.length)];
    generatedPassword.push(pickChoices);
  }

  var finalPassword = generatedPassword.join("");
  userInput(finalPassword);
  return finalPassword;

}

var text;


//Buttton which exclude the lowerletter and proceed to final result
noBtnLcase.addEventListener('click', function () {
  dialogBox4.style.display = "none";

  noLL = 1;

  // If no any characters are selected, it will alert nothing selected
  var nothing = [].concat(noLL, noNumber, noSymbol, noUL);
  text = 0;
  for (var i = 0; i < nothing.length; i++) {
    text += nothing[i];
  }
  //IF the total of 4 no buttons are seleceted alert text appears
  console.log(text);
  if (text == 4) {
    alert(message);
  }
  allDone(final);


})


//Placed the final results of generated passwords in relevent placeholder
function userInput(finalPassword) {
  document.getElementById("password").textContent = finalPassword;
}






