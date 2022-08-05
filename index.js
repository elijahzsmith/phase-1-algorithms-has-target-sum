function hasTargetSum(array, target) {
  for (let i = 0; i <= array.length - 1; i++) {
    const complementaryNum = target - array[i];
    for (let j = i + 1; j <= array.length - 1; j++) {
      if (array[j] === complementaryNum) {
        return true;
      }
    }
  }
  return false;
}

// const hasTargetSum = (array, target) => {
//   // const seenNumbers = {}

//   for (const number of array) {
//     const complementaryNum = target - number;
//     if (complementaryNum in seenNumbers) return true;
//     // seenNumbers[number] = true
//   }
//   return false;
// };

// target - (any of the index values) = some number.
// if that number + any other number in the array = the target
// return true

// [3, 8, 12, 4, 11, 7], 10

// 0, 1, 2, 3, 4
// 1, 2, 3, 4, 5
/* 
  Write the Big O time complexity of your function here
  O(n^2)
  vs
  O(n)
*/

/* 
  Add your pseudocode here

  save value at start of or end of array in a variable called currentCase

  iterate over the array, checking on each loop, if the current index + the currentCase = the target

  if it does, return true

  if it doesn't, add 1 to the currentCase and loop again ( starting at the very beginning or very end each time )

  if currentCase = array.length -1 and there has still been no match, return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// for (let i = 0; i <= array.length - 1; i++) {
//   for (let j = i + 1; j <= array.length - 1; i++) {
//     let sum = array[i] + array[j]
//     if (sum === target) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// for (let element of array) {
//   for (let i =- )
//     if (element2 + element === target) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// // Write your algorithm here
// let currentNum = []
// for (let i = 0; i <= array.length - 1; i++) {
//   // console.log(i)
//   currentNum.push(i)
//   for (let j = array.length - 1; j >= array.length - 1; j--) {
//     if ( i + j == target) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// function hasTargetSum(array, target) {
//   let currentCase = array[0]
//   // console.log(currentCase)
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (currentCase + i === target) {
//       return true
//     } else if (currentCase + i !== target) {
//       currentCase += 1
//       // console.log(currentCase)
//     }
//   }
// }

// function hasTargetSum(array, target) {

//   for (let i = 0; i <= array.length - 1; i++) {                 // iterate over the array
//     let currentCase = array[i]                                  // variable to store current array
//     let complimentaryNum = target - currentCase                 // variable for number we're searching for depending on the index value
//     for (let j = i + 1; j <= array.length; j++) {               // iterate over the array starting at the value after the i
//       if (currentCase + complimentaryNum === target) {          //
//         return true                                             //
//       } else if (currentCase + complimentaryNum !== target) {   //
//         currentCase++                                           //
//       }
//     }
//   }
//   return false
// }

// function hasTargetSum(array, target) {

//   for (let i = 0; i <= array.length - 1; i++) {
//     const complimentaryNum = target - array[i]
//     for (let j = i + 1; j <= array.length; j++) {
//       if (array[i] + complimentaryNum === target) {
//         return true
//       } else if (currentCase + complimentaryNum !== target) {
//         array[i + 1]
//       }
//     }
//   }
//   return false
// }
