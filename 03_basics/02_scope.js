let a= 300
const b = 400
var c = 500

if (true) {
    let a = 30
    const b = 40
    var c = 50
    console.log(`Inner: ${a}`);
    console.log(`Inner: ${b}`);
    console.log(`Inner: ${c}`);
}

console.log(`Outer: ${a}`);
console.log(`Outer: ${b}`);
console.log(`Outer: ${c}`);

// scope is a concept of how variables are accessible in the code. Var cariables are default as a global scope.

