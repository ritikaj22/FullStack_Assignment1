// 5. Find the Union of Two Arrays
function union(arr1, arr2) {
    let result = [...arr1];
    for (let item of arr2) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
    return result;
  }
  
  console.log(union([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

