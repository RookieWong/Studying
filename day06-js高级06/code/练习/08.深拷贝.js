function checkType(o) {
  return Object.prototype.toString.call(o).toLowerCase().slice(8, -1);
}

// 使用递归实现深拷贝，拷贝对象中所有真正属性，而不是地址
function deepClone(o) {
  // 判断当前拷贝的是对象还是数组
  let result = null;
  if (checkType(o) === "object") {
    result = {};
  } else if (checkType(o) === "array") {
    result = [];
  } else {
    // 如果不是对象和数组，则不进行拷贝，直接把当前值返回即可
    return o;
  }

  for (let key in o) {
    result[key] = deepClone(o[key]);
  }
  return result;
}


//使用
var o1 = {
    name: "laowang",
    age: 18,
    score: [100, 90, 80]
}
var o2 = deepClone(o1)
console.log(o2);
console.log(o2.score === o1.score); //深拷贝 false