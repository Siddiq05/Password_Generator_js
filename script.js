const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet= "0123456789"
const symbolSet = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~"

const InputText = document.getElementById("inputBox")
const InputLength = document.getElementById("InputLength")
const UpperText = document.getElementById("upperCase")
const LowerText = document.getElementById("lowerCase")
const NumberText = document.getElementById("numberCase")
const SymbolText = document.getElementById("symbolCase")
const Button = document.querySelector(".Button")


const randomData = (dataSet) =>{
  return dataSet[Math.floor(Math.random() * dataSet.length)]
}
// console.log(randomData(symbolSet));

const generatePassword = (password ="") =>{
  if (!UpperText.checked && !LowerText.checked && !NumberText.checked && !SymbolText.checked) {
    alert("Please select at least one character type!");
    return "";
  }
  if (UpperText.checked) {
    password += randomData(upperSet)    
  }
  if (LowerText.checked) {
    password += randomData(lowerSet)    
  }
  if (NumberText.checked) {
    password += randomData(numberSet)    
  }
  if (SymbolText.checked) {
    password += randomData(symbolSet)    
  }
  if (password.length < InputLength.value) {
    return generatePassword(password);
  }
  console.log(password);
  
    InputText.value =  truncateString(password, InputLength.value)
  
}

Button.addEventListener('click',()=>{
  generatePassword()
})

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}

 

