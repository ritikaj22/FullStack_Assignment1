// 3. Flatten a Nested Array
function flattenArray(arr) {
    let result = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(flattenArray(item));
      } else {
        result.push(item);
      }
    }
    return result;
  }
  
  console.log(flattenArray([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]
  