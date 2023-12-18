"use Strict";   // treat js code in this file as newer version

/*Premitive datatypes are of 7 catagories: (call by value)
                String, boolean, null, undefined, Symbol, BigInt, Number

Non Premitive/ Reference: (direct reference to memory)
                array, object, functions*/

let bigNum = 9786452315468764523145n
// adding "n" at end of a big number treats it as bigInt

console.log(typeof bigNum)

// array, Objects, functions
const Heros = ["shaktiman" , "saboo" , "flash"]

console.log(typeof Heros)

let myObj= {
    name: "sourav",
    age: 24
}

console.log(typeof myObj)

const myfunction = function(){
    console.log("this is a function")
} 

console.log(typeof myfunction)

//type of all non premetive datatypes is "Object", for a function data type prints "function" but in documentation it states the actual meaning is "object function"


// datatype of symbol is symbol

/* Types of memory-
1) Stack Memory (for premetive data types)
2) Heap Memory (for reference datatypes)
*/

let myname = "Sourav"
