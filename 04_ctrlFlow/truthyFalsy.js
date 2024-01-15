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