// singletone
const tUser = new Object();     // singletone object
const tiUser = { }              // non singletone object

// there is no other difference between these two objects
tUser.id = "5467sd";
tUser.name = "Sourav";
tUser.isLoggedIn = false;

console.log(tUser);

const tinUser = {
    name: {
        fullname : {
            firstname: "Sourav",
            lastname: "Mehta"
        }
    }
} // creating nested objects

console.log(tinUser.name.fullname);

console.log("---------------merging objects---------------");

const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", mail: "five", 6: "six"};
const obj3 = {7: "seven", 8: "eight", 9: "nine"};

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// same as arrays
const obj5 = {...obj1,...obj2,...obj3};
console.log(obj5);

// Objects nested in array
console.log("---------------");
const arry = [obj1, obj2, obj3];
console.log(arry[1].mail);
//console.log(arry[2].9);       ---- wont work with numbers as it gets confused

console.log(Object.keys(obj1));     // provides keys of objects as an array
console.log(Object.values(obj1));   // provides values of objects as an array
console.log(Object.entries(obj1));  // provides key value pairs of objects as an array

console.log(obj5.hasOwnProperty('mail')); // hasOwnProperty

console.log("-------Another syntax to get values of objects-------");
const course = {
    name: "Javascript",
    price: 100,
    courseIsntructor: "Sourav"
}
const {courseIsntructor, price} = course;       //this is also called destructuring of objects
console.log(courseIsntructor);

