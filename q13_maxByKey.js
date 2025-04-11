// 13. Find the Object with the Maximum Value for a Key
function maxByKey(arr, key) {
    return arr.reduce((maxObj, item) => item[key] > (maxObj[key] || 0) ? item : maxObj, {});
  }
  
  console.log(maxByKey([{score: 10}, {score: 20}, {score: 15}], "score")); // Output: {score: 20}
  