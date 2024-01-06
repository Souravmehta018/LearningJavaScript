// object literals

const sym = Symbol("key1");     //declaring a symbol

const user = {
    name: "Jay",
    "full name": "Sourav Mehta",
    [sym]: "value",                     //syntax for using symbol as key, else it will be treated as string
    age: 24,
    location: "New York",
    email: "mehtas0182gmail.com",
    isLoggdIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

//key: value pairs. Keys are default declared as string.

console.log(user.name);

user.name = "Sourav";

console.log(user["name"]);
console.log(user["full name"]);
console.log(user[sym]);

//Object.freeze(user);
//user["full name"] = "Lakshay Mehta"

console.log(user);

// creating method as a value of an object
user.greet = function() {
    console.log("Hello, " + this.name);
}

console.log(user.greet());      //undefined refers to second automatic executionde

console.log("------------------------------");

console.log(user);