for (let [key, value] of map) {
    console.log(key, "=>", value);
}


let myObj = {
    name: 'Nic',
    age: 23,
    city: 'Mexico'
}

for (let [key, value] of Object.entries(myObj)) {
    console.log(key, "=>", value);
}

console.log('---------------------------------');

for (const key in myObj) {
    let value = myObj[key];
        console.log(key, "=>", value);
}

console.log("=================================");

let arr = ["a", "b", "c", "d", "e"];

for (let key of arr){
    console.log(key);
}

for (let key in arr){
    console.log(key);
}











