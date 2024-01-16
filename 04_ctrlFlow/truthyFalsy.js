const email = "mehtas01018@gmail.com"

if (email)  console.log("got email");
else console.log("email not avialable");



//Falsy values:
// false, 0, -0, BigInt, "", null, undefined, NaN

/*Truthy Value:
"0", "false", 'NaN', {}, [], function(){}
*/
const emptyobj = {}
const arrayOfKeys = Object.keys(emptyobj)

if (arrayOfKeys.length === 0) {
    console.log("got keys")
}
else {
    console.log("no keys")
}

// Nullish Coalescing Operator (??): null identifier

let val1;
//val1 = 5??10;
//val1 = null ?? 10;
//val1 = undefined ?? 15
val1 = null ?? 15 ?? 5
console.log(val1);

//Turnery Operator

// condition ? true : false;

let price = 100;
price >= 80 ? console.log(`Price is ${price}`) : console.log("Price is lower than 80");   