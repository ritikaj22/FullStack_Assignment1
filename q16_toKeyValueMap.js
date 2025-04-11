// 16. Convert an Array of Objects into a Key-Value Map
function toKeyValueMap(arr, key) {
    let result = {};
    for (let obj of arr) {
      result[obj[key]] = obj;
    }
    return result;
  }
  
  console.log(toKeyValueMap([{id: 1, name: 'A'}, {id: 2, name: 'B'}], 'id'));
// 16. Convert an Array of Objects into a Key-Value Map
function toKeyValueMap(arr, key) {
    let result = {};
    for (let obj of arr) {
      result[obj[key]] = obj;
    }
    return result;
  }
  
  console.log(toKeyValueMap([{id: 1, name: 'A'}, {id: 2, name: 'B'}], 'id'));
    