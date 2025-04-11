// 18. Filter an Array of Objects Based on Multiple Conditions
function filterByConditions(arr, conditions) {
    return arr.filter(obj =>
      Object.keys(conditions).every(key => obj[key] === conditions[key])
    );
  }
  
  console.log(filterByConditions([{name: "A", age: 20}, {name: "B", age: 25}], {age: 25}));
  