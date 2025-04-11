// 11. Sort an Array of Objects by a Specific Key
function sortByKey(arr, key) {
    return arr.sort((a, b) => a[key] - b[key]);
  }
  
  console.log(sortByKey([{age: 25}, {age: 20}, {age: 30}], "age"));
  