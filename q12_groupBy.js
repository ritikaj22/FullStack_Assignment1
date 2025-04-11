// 12. Group Objects by a Property
function groupBy(arr, key) {
    return arr.reduce((group, item) => {
      let val = item[key];
      (group[val] = group[val] || []).push(item);
      return group;
    }, {});
  }
  
  console.log(groupBy([{age: 20}, {age: 25}, {age: 20}], "age"));
  