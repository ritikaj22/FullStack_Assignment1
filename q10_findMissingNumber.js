// 10. Find Missing Numbers in a Sequence
function findMissing(arr) {
    let missing = [];
    let min = Math.min(...arr), max = Math.max(...arr);
    for (let i = min; i <= max; i++) {
      if (!arr.includes(i)) missing.push(i);
    }
    return missing;
  }
  
  console.log(findMissing([1, 2, 4, 6])); // Output: [3, 5]
  