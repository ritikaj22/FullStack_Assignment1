// 19. Convert an Object to an Array of Key-Value Pairs
function objectToPairs(obj) {
    return Object.entries(obj);
  }
  
  console.log(objectToPairs({a: 1, b: 2})); // Output: [['a', 1], ['b', 2]]
  