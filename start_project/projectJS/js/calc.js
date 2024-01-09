// calc || or &&

var firstNumber = Number(prompt("zadaj prvé číslo"));
var secondNumber = Number(prompt("zadaj druhé číslo"));
var sign = prompt("zadaj matematickú operáciu");

console.log(firstNumber)
console.log(sign)
console.log(secondNumber)
console.log("=")

if (sign == "+") {
    console.log(firstNumber + secondNumber);
} else if(sign == "-") {
    console.log(firstNumber - secondNumber);
} else if(sign == "*") {
    console.log(firstNumber * secondNumber);
} else if(sign == "/" && secondNumber!= 0) {
    console.log(firstNumber / secondNumber);
} else if(sign == "/" && secondNumber == 0) {
    console.log("Nemôžeš deliť nulou. Druhé číslo pri delení nemôže byť nula!")
} else {
    console.log("Nepoznám túto matematickú operáciu");
}

