let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let decimal = document.querySelector("#decimal");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");
let result = document.querySelector("#result");
let pct = document.querySelector("#pct");
let parenthesis = document.querySelector("#parenthesis");

zero.addEventListener('click', function () {
    result.value += "0"
})
one.addEventListener('click', function () {
    result.value += "1"
})
two.addEventListener('click', function () {
    result.value += "2"
})
three.addEventListener('click', function () {
    result.value += "3"
})
four.addEventListener('click', function () {
    result.value += "4"
})
five.addEventListener('click', function () {
    result.value += "5"
})
six.addEventListener('click', function () {
    result.value += "6"
})
seven.addEventListener('click', function () {
    result.value += "7"
})
eight.addEventListener('click', function () {
    result.value += "8"
})
nine.addEventListener('click', function () {
    result.value += "9"
})

pct.addEventListener('click', function () {
    result.value += "%"
})
divide.addEventListener('click', function () {
    result.value += "/"
})
multiply.addEventListener('click', function () {
    result.value += "x"
})
minus.addEventListener('click', function () {
    result.value += "-"
})
plus.addEventListener('click', function () {
    result.value += "+"
})
decimal.addEventListener('click', function () {
    result.value += "."
})

clear.addEventListener('click', function () {
    result.value = ""
})
equals.addEventListener('click', function () {
    result.value = eval(result.value)
})