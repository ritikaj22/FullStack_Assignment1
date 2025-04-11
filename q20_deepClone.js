// 20. Deep Clone a Nested Object (without using JSON methods)
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);
  
    let result = {};
    for (let key in obj) {
      result[key] = deepClone(obj[key]);
    }
    return result;
  }
  
  const original = { a: 1, b: { c: 2 } };
  const clone = deepClone(original);
  console.log(clone);
  