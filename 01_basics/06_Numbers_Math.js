const number = 10
const balance = new Number(1000000)
const num = 21354.6451

console.log(balance.toFixed(2))
console.log(balance.toString().length)
console.log(balance.length)         //undefined

console.log(num.toPrecision(5))

console.log(num.toPrecision(6))

console.log(balance.toLocaleString('en-In'))

console.log("-----------Math-----------")

console.log(Math.PI)
console.log(Math)       //try in inspect ellement to get soo many more functions

console.log(Math.abs(-10) + "  --absolute value")
console.log(Math.round(4.6));   //ceil & floor is also avialable
console.log(Math.max(10, 20, 45, 100))

console.log(Math.ceil(Math.random()*6) + "  --random number")

