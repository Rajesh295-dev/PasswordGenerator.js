// Assignment Code
var dialogHeader=document.querySelector("#dlgHeader");

var inputEl=document.querySelector("#lengthEl");

var dialogBox=document.querySelector("#prompt-box");
var dialogBox1=document.querySelector("#prompt-box1");
var dialogBox2=document.querySelector("#prompt-box2");
var dialogBox3=document.querySelector("#prompt-box3");

var generateBtn = document.querySelector("#generate");
var generateBtn1=document.querySelector("#generate1");

var yesBtn=document.querySelector("#YesBtn");
var noBtn=document.querySelector("#NoBtn");

var yesBtn1=document.querySelector("#YesBtn1");
var noBtn1=document.querySelector("#NoBtn1");

var yesBtn2=document.querySelector("#YesBtn2");
var noBtn2=document.querySelector("#NoBtn2");

var resultEl=document.querySelector("#password");




//First Number dialog prompt//
generateBtn.addEventListener('click', ()=>{
  if(dialogBox.style.display==='none'){
    dialogBox.style.display='block';
  }else{
    dialogBox.style.display='none';
  }

})

//Second Symbols prompt//
generateBtn1.addEventListener('click', function(){
  dialogBox.style.display="none";
  dialogBox1.style.display="block";

})

//Third uppercase prompt//
yesBtn.addEventListener('click', function(){
  dialogBox1.style.display="none";
  dialogBox2.style.display="block";

})
noBtn.addEventListener('click', function(){
  dialogBox1.style.display="none";
  dialogBox2.style.display="block";

})

//Third Lowerrcase prompt//
yesBtn1.addEventListener('click', function(){
  dialogBox2.style.display="none";
  dialogBox3.style.display="block";

})
noBtn1.addEventListener('click', function(){
  dialogBox2.style.display="none";
  dialogBox3.style.display="block";

})

//final prompt to generate the password

yesBtn2.addEventListener('click', () =>{
  dialogBox2.style.display="none";
  dialogBox3.style.display="none";

  const number=inputEl.value;
  
  const yesSymbol=yesBtn.clicked;
  const noSymbol=noBtn.clicked;

  const yesUppercase=yesBtn1.clicked;
  const noUppercase=noBtn1.clicked;

  const yesLowercase=yesBtn2.clicked;
  const noLowercase=noBtn2.clicked;

  console.log=writePassword(number, yesSymbol, noSymbol, yesUppercase, noUppercase, yesLowercase, noLowercase);
   
})

noBtn2.addEventListener('click', () =>{
  dialogBox2.style.display="none";
  dialogBox3.style.display="none";

  const number=inputEl.value;
  
  const yesSymbol=yesBtn.clicked;
  const noSymbol=noBtn.clicked;

  const yesUppercase=yesBtn1.clicked;
  const noUppercase=noBtn1.clicked;

  const yesLowercase=yesBtn2.clicked;
  const noLowercase=noBtn2.clicked;

 resultEl.innerText=writePassword(number, yesSymbol, noSymbol, yesUppercase, noUppercase, yesLowercase, noLowercase);
 
})
  

function writePassword(lower, upper, symbol, number) {
    
    let generatedPassword='';
     //console.log('typesCount:', typesCount);

     const typesCount=lower+upper+number+symbol;
  
     const typesArr=[{lower}, {upper}, {number}, {symbol}].filter
     (item=>Object.values(item)[0]);
      
     //console.log('typesArr:', typesArr);
     
     if(typesCount===0){
       return'';
     }
     for(let i=0; i<length; i+=typesCount){
       typesArr.forEach(type=>{
         var functionName=Object.keys(type)[0];
  
         generatedPassword += randomFunction[functionName]();
       });
     }
  
     const finalPassword=generatedPassword.slice(0, length);
     return finalPassword;
  
  }
  
  
  
  
  function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
  }
  
  function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
  }
  
  function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
  }
  
  function getRandomSymbol(){
    const symbols='!@#$%^&*()_+{}[]';
      return String.fromCharCode[Math.floor(Math.symbols.length)];
    
  }
  
  const randomFunction={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
  
  };
  
  
  






