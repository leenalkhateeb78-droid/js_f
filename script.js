// 1
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findSmallest([30, 45, 60, 7]));

// 2
function AlphabeticalOrder(str) {
  let letters = str.split('');
  letters.sort();
  return letters.join('');
}
console.log(AlphabeticalOrder('hello'));

// 3
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(8));

// 4
function oddOrEven(n) {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(oddOrEven(9));

// 5
function addUp(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(addUp(8));

// 6
function minMaxLengthAverage(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum = sum + arr[i];
  }

  let length = arr.length;
  let average = sum / length;

  return [min, max, length, average];
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));

// 7
function countWords(str) {
  let words = str.split(' ');
  return words.length;
}
console.log(countWords('hello from CodingAcademy!'));

// 8
function MultiplyByLength(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr.length);
  }
  return result;
}
console.log(MultiplyByLength([4, 2, 5]));

// 9
function checkEnding(str1, str2) {
  let end = str1.slice(str1.length - str2.length);
  return end === str2;
}
console.log(checkEnding("CodingSchool", "Ac"));

// 10
function doubleChar(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + str[i];
  }
  return result;
}
console.log(doubleChar('Coding'));

// 11
function findIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i + 1;
    }
  }
  return -1;
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 



/*=============================================================

          Ex.2 Js looping
================================================================*/


// 1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2
let arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 3
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 4
let sum4 = 0;
for (let i = 1; i <= 10; i++) {
  sum4 += i;
}
console.log(sum4); // 55

// 5
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargest([1, 2, 3, 4, 5])); 

// 6
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));

// 7
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // 120

// 8
function fibonacci(max) {
  let result = [];
  let a = 0;
  let b = 1;

  while (a <= max) {
    result.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  return result;
}
console.log(fibonacci(10));

// 9
function findPrimes(max) {
  let result = [];

  for (let num = 2; num <= max; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      result.push(num);
    }
  }

  return result;
}
console.log(findPrimes(20)); 

// 10
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// 11
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3, 4, 5])); 

// 12
function printWithStep(arr, step) {
  let result = [];
  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }
  return result;
}
console.log(printWithStep([1, 2, 3, 4, 5], 2)); 

// 13
function findFrequency(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
console.log(findFrequency([1, 2, 1, 3, 2, 1], 1)); 

// 14
const heros = [
  { name: 'Iron Man', power: 'Tech' },
  { name: 'Spider-Man', power: 'Spider abilities' },
  { name: 'Thor', power: 'Godly powers' },
  { name: 'Hulk', power: 'Super strength' }
];

const newHeros = heros.map((hero, index) => {
  return {
    hero: hero.name,
    power: hero.power,
    id: index
  };
});
console.log(newHeros);

// 15
function filterLongWords(inputWords) {
  return inputWords.filter(word => word.length > 7);
}
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(filterLongWords(inputWords)); 

// 16
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumSquaredDivisibleBy5 = numbers.reduce((total, num) => {
  if (num % 5 === 0) {
    return total + (num * num);
  }
  return total;
}, 0);
console.log(sumSquaredDivisibleBy5);



/* ==================== JavaScript Objects ==================== */

// 1
const person1 = { name: "Adam", age: 25, gender: "male" };
console.log(person1.name, person1.age, person1.gender); 
// 2
const person2 = { name: "Adam", age: 25 };
person2.gender = "male";
console.log(person2);

// 3
const person3 = { name: "Adam", age: 25 };
console.log(person3.name); // "Adam"





/* ==================== JavaScript Arrays ==================== */

// 1
const nums1 = [1, 2, 3, 4, 5];
nums1.forEach(num => console.log(num));

// 2
const fruits2 = ["banana", "cherry", "apple"];
fruits2.sort();
console.log(fruits2);

// 3.A
const fruits3a = ["apple", "banana", "cherry"];
fruits3a.reverse();
console.log(fruits3a); 
// 3.B
const arr3b1 = [1, 2, 3];
const arr3b2 = [4, 5, 6];
const combined3b = arr3b1.concat(arr3b2);
console.log(combined3b);

// 3.C
const arr3c = [1, 2, 3, 4, 5, 6];
const sliced3c = arr3c.slice(2, 4);
console.log(sliced3c); // [3, 4]

// 3.D
const arr3d = [1, 2, 3, 4, 5];
arr3d.splice(2, 1); 
console.log(arr3d); 

// 3.E
const arr3e = [1, 2, 3, 4, 5];
console.log(arr3e.indexOf(3)); 

// 3.F
const arr3f = [1, 2, 3, 4, 5];
const joined3f = arr3f.join(",");
console.log(joined3f);

// 3.G
const str3g = "1,2,3,4,5";
const split3g = str3g.split(",");
console.log(split3g);

// 7
const arr7 = [1, 2, 3, 4, 5];
console.log(arr7.length); // 5

// 8
const arr8 = [1, 2, 3, 4, 5];
for (const num of arr8) {
  console.log(num);
}

// 9
const arr9 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr9)); 
