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
let sliceArray = numbers.slice(1,3);
console.log(sliceArray);
