const accountId = 14453
let accountEmail = "mehtas@gmail.com"
var accountPass = "12345"       /*avoid using Var in javascript because of issues in scope {}*/
accountCity = "Saharanpur"  // not a good practice
let accState

// accountId = 566  NOT ALLOWED AS THIS IS CONSTANT
accountEmail = "hjsdk@gmail.com"
// 

console.log(accountId)
console.log(accountEmail)
console.table([accountEmail,accountId,accountPass,accountCity,accState])
