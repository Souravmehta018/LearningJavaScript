function add(a, b) {
    return a + b;
    console.log("Hello");           // function never prints anything after return
}
console.log(add(1, 2));
// a & b are called parameters
// 1 & 2 are called arguments or values

function logInUser(usrname) {
    if (usrname === undefined) {            //if (!usrname) { 
        return "Please provide a username";
    } else {
        return `${usrname} is logged in`;
    }
    return `${usrname} is logged in`;
}
const a = logInUser();      //Undifined as output as value not provided
console.log(a);

function cart(...items) {
    return items[2]
}
console.log(cart("apple", "orange", "banana"));

function cart(items) {
    return items[2]
}
array = ["apple", "orange", "banana"]
console.log(cart(array));