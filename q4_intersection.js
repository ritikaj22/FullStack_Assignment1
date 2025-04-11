// 4. Find the Intersection of Two Arrays
function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  
  console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
  