function z() {
    return "z--Hello";
}
console.log(z());

const a = function() {
    return "a--Hello";
}
console.log(a());

const b = () => {
    return "b--Hello";
}
console.log(b());

const c = () => "c--Hello";             //implicit return
console.log(c());

const d = () => {"d--Hello"};           // curly braces m wrap kia to return keyword likhna hi pardega
console.log(d());

const objectFunction = () => ({username: "sourav"});
console.log(objectFunction());

const objectFunction2 = () => {
    return {username: "sourav"};
}
console.log(objectFunction2());

const e = () => ("e--Hello");
console.log(e());

/* f() => {
    return "f--Hello";
}
console.log(f());*/