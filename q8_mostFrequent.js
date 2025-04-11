// 8. Find the Most Frequent Element in an Array
function mostFrequent(arr) {
    let count = {}, maxFreq = 0, element;
    for (let item of arr) {
      count[item] = (count[item] || 0) + 1;
      if (count[item] > maxFreq) {
        maxFreq = count[item];
        element = item;
      }
    }
    return element;
  }

console.log("Most Frequent:", mostFrequent([1,2,2,3,3,3,4]));