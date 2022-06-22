// Optimize - 2 // 
function hasTargetSum(array, target) {
  const seenNumbers = {}

  for(const number of array) {
    const complement = target - number
    if (complement in seenNumbers) return true
    seenNumbers[number] = true
  }
  return false
}


// Optimize - 1 // 
// function hasTargetSum(array, target) {
//   const seenNumbers = {}

//   for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
//     const complement = target - array[i]
//     if (seenNumbers[complement]) return true
//     seenNumbers[array[i]] = true
//   }
//   return false
// }

// Original Function //
// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const difference = target - array[i]

//     for (let j = i +1; j < array.length; j++){
//       if(array[j] === difference) {
//         return true
//       }
//     }
//   }
//   return false
// }

/* 
  Write the Big O time complexity of your function here
  0(n * n)/O(n^2)
*/

/* 
  takes an argument of an array of numbers &
  an argument with a target number

  the function should return TRUE if any combo (pair) of numbers w/in 
  the array & === the target number

  example: 
  array = [2, 3, 7, 15, 28] 
  target number = 10
  the function will return TRUE because 3 + 7 === 10 (the target number)
  
  else returns false
*/

/*
  Add written explanation of your solution here
  first we iterate over the array (i)
  next we set a variable to find the difference between the target number & i 
    => we set this to see if there is a number w/in the array that matches, if yes then
    => that means i plus the number that matches the difference === the target number
  then we need to iterate over the array again to see if there is a # (j) that matches difference
  if j === difference then return true 
    => iterate over the entire array
  if none of the numbers in the array match the difference then return false 

  ex: using first test below 
    array = [3, 8, 12, 4, 11, 7]
    target = 10

  first iteration i = 3
  the variable gets set: 10 (target) - 3 (i) = 7 (difference)
  iterate through the array again to find j
    => iterates through the entire array, until it hits the last #, 7 which matches
    => returns true
*/


const chai = require("chai");
global.expect = chai.expect;
// const hasTargetSum = require("../index");

describe("hasTargetSum", () => {
  it("returns true when the array is [3, 8, 12, 4, 11, 7] and the target is 10", () => {
    expect(hasTargetSum([3, 8, 12, 4, 11, 7], 10)).to.be.true;
  });
  it("returns true when the array is [22, 19, 4, 6, 30] and the target is 25", () => {
    expect(hasTargetSum([22, 19, 4, 6, 30], 25)).to.be.true;
  });
  it("returns false when the array is [1, 2, 5] and the target is 4", () => {
    expect(hasTargetSum([1, 2, 5], 4)).to.be.false;
  });
  it("returns true when the array is [-7, 10, 4, 8] and the target is 3", () => {
    expect(hasTargetSum([-7, 10, 4, 8], 3)).to.be.true;
  });
  it("returns true when the array is [1, 2, 3, 4] and the target is 5", () => {
    expect(hasTargetSum([1, 2, 3, 4], 5)).to.be.true;
  });
  it("returns true when the array is [2, 2, 3, 3] and the target is 4", () => {
    expect(hasTargetSum([2, 2, 3, 3], 4)).to.be.true;
  });
  it("returns false when the array is [4] and the target is 4", () => {
    expect(hasTargetSum([4], 5)).to.be.false;
  });
});
