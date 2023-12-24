const numbers = [1, 2, 3, 4, 5];
const arr = new Array("one", "two", "three");

console.log(arr);
console.log(numbers);

// Array Methods

numbers.push(6);
console.log(numbers);
numbers.push(7);
numbers.pop();      // pop deleting last element
console.log(numbers);
console.log(numbers.pop() + "   ---pop givin last element");

numbers.unshift(0); // unshift adding at beginning, all values of arrays are shifted a step ahead
console.log(numbers);

numbers.shift(); // shift removes first element
console.log(numbers);

console.log(numbers.indexOf(2)); // index of element
console.log(numbers.indexOf(10)); // -1 if not found

// join
const narry = numbers.join();
const marray = numbers.join(" - ");
console.log(narry);
console.log(typeof narry);
console.log(marray);
 
// slice, splice
console.log("------slice splice -------");
console.log(numbers);
let sliceArray = numbers.slice(1,3);
console.log(sliceArray + "   ---slice");
console.log(numbers + "   --- after slice");
let spliceArray = numbers.splice(1,3);
console.log(spliceArray + "   ---splice");
console.log(numbers + "   --- after splice");;


console.log("-----------Multiple Arrays----------");
let arr1 = ["one", "two", "three"];
let arr2 = ["four", "five", "six"];
let arr3 = ["seven", "eight", "nine"];

arr5= arr1.push(arr2)
console.log(arr5.length);
console.log(arr5);
console.log(arr1);
console.log(arr1[2][1]);
console.log(arr1[3][1]);
console.log(arr1);
console.log("-----------concat----------");

let arra1 = ["one", "two", "three"];
let arra2 = ["four", "five", "six"];
let arra3 = ["seven", "eight", "nine"];

arra4 = arra1.concat(arra2);
console.log(arra4);
console.log(arra1);
//console.log(arra1.push(arra3) + "   ---push 2");;
//console.log(arr1.concat(arr2));

console.log("-----------Spread----------");
const array = [...arra1,...arra2,...arra3];
console.log(array);
console.log(array[8]);

console.log("----nested array----");
const nArr = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12, [13, 14, 15]], 16, 17, 18];
console.log(nArr);
console.log("Spread it");
const spreadedArray =nArr.flat(Infinity);
const spreadedArray1 =nArr.flat(1);
console.log(spreadedArray);
console.log(spreadedArray1);


console.log("-----------convert string to array----------");

const str = "hello world";
console.log(Array.from(str));
console.log(Array.from({name: "Jay"})); // interesting


let s1=12
let s2=15
let s3=18
console.log(Array.of(s1, s2, s3));
// console.log(Array.from(s1, s2, s3)); WON'T WORK AS IT ONLY WORKS WITH STRINGS

