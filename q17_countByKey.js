// 17. Count the Frequency of Properties in an Array of Objects
function countByKey(arr, key) {
    return arr.reduce((count, obj) => {
      count[obj[key]] = (count[obj[key]] || 0) + 1;
      return count;
    }, {});
  }
  
  console.log(countByKey([{age: 20}, {age: 25}, {age: 20}], 'age'));
  