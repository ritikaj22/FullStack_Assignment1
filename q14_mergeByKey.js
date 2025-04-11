// 14. Merge Two Arrays of Objects by a Common Key
function mergeByKey(arr1, arr2, key) {
    let map = {};
    [...arr1, ...arr2].forEach(item => {
      map[item[key]] = { ...map[item[key]], ...item };
    });
    return Object.values(map);
  }
  
  let arr1 = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];
  let arr2 = [{id: 1, age: 20}, {id: 2, age: 25}];
  console.log(mergeByKey(arr1, arr2, 'id'));
  