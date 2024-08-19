"use strict";

let arr = ["a", "b", "c", "d", "e"];

// 1. slice - returns a new array(does not mutate the orginal array)
let newArr = arr.slice(2, 4);
console.log(newArr);
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // create a shallow copy
const [...rest] = arr;
const spread = [...arr];

// 2. splice() - changes/mutates the original array, it includes the last value too. Splice() is usually used to delete one or more element in an array.
arr.splice(-1);
console.log(arr);

// 3. reverse - mutates the original array
const reverseArr = ["j", "q", "k", "a", "d", "c", "b"];
console.log(reverseArr.reverse());

// 4. concat - to concatenate 2 arrays
const letters = arr.concat(reverseArr);
console.log(letters);
console.log([...arr, ...reverseArr]); //using the spread operator

// 5. join() - using a separator
console.log(letters.join("-"));


// at() - most important when working with array chaining
const ages = [64,12,30]
console.log(ages.slice(-1)[0]);
console.log(ages[ages.length - 1]);
console.log(ages.at(-1));
