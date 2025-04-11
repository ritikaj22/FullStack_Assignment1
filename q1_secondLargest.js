//// 1. Find the Second Largest Number in an Array
function secondLargest(arr) {
    let max = -Infinity, second = -Infinity;
    for (let num of arr) {
      if (num > max) {
        second = max;
        max = num;
      } else if (num > second && num < max) {
        second = num;
      }
    }
    return second;
  }
  
  console.log(secondLargest([10, 5, 20, 8, 20])); // Output: 10
  