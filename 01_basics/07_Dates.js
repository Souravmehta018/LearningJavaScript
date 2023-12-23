// dates are started and calculate from 1 jan 1970
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let createdDate = new Date(2024, 0, 2, 11, 30, 0)
let newDate = new Date("01-02-2023")
console.log(createdDate.toLocaleString()); 
console.log(newDate.toDateString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(createdDate.getTime());

console.log(myDate.getFullYear());

console.log(myDate.toLocaleDateString('default',{
    weekday: 'long',
}));