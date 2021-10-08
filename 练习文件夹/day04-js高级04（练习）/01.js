var str = "abfranhjabbfdbbfebabbebwqbbb";
var o = {};
str.split("").forEach(function (item, index) {
  // 判断对象中的key有没有当前的值，如果有，则keyi的值累加，否则新增一个key的值为1
  o[item] ? o[item]++ : (o[item] = 1);
});
console.log(o);
// 初始化一个值
let maxItem = 0;
let keyItem = null;

// 获取最大的key值
for (key in o) {
  // o[key] > maxItem ? {maxItem = o[key];keyItem = key} : maxItem = maxItem;
  if (o[key] > maxItem) {
    maxItem = o[key];
    keyItem = key;
  }
}
console.log("最大的字母在" + str.search(keyItem) + "位置" + "其值是" + maxItem);
