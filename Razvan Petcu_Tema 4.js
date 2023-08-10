//numbers from 0 to 20
for (var i = 1; i <= 20; i++) {
  console.log(i);
}

//odd numbers from 0 to 20
for (var i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//sum of the array
const myarrays = [3, 7, 2, 8, 1, 9];
let sum = 0;

for (let i = 0; i < myarrays.length; i++) {
  sum += myarrays[i];
}

console.log("The sum of the elements is: " + sum);

//max of the array
const array = [3, 7, 2, 8, 1, 9];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log("The max number: " + max);



//number repet
const arrays = [3, 7, 2, 8, 1, 9, 2, 5, 2];
const searchElement = 2;
let count = 0;

for (let i = 0; i < arrays.length; i++) {
  if (arrays[i] === searchElement) {
    count++;
  }
}

console.log(`The element ${searchElement} appears ${count} times.`);

//pattern
