let name = "Sourav"
let upi = "1234567890"
/* console.log("My name is " + name + " and UPI is " + upi) 
this way is no more used as it is not reliable with the changes in the code*/

console.log(`My name is ${name} and UPI is ${upi}`)
//this is called backticks method and is indusrty standard now

console.log(typeof name)

//Stings are types of arrays not object
console.log(name[0])
console.log(name[2])

console.log(name.__proto__) //inspector m karoge in any browser then saare methods display ho jayenge

console.log("-------Methods for Strings-------")
console.log(name.charAt(0))
console.log(name.toUpperCase())
console.log(name.indexOf("ou"))
console.log(name.slice(0,2))
console.log(name.substring(0,2)+"  - substring")
console.log(name.slice(-4,4))
console.log(name.substring(-4,4)+"  - substring")
console.log(name.length)
console.log(name.split("o"))
console.log(name.concat(" Sharma") + " - concat")
console.log(name.replace("Sourav","Lakshay"))
console.log(name.includes("Sou") + " - includes")
let name2 = "   Chota   "
console.log(name2.trim())



