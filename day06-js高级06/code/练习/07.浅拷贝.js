let o1 = {
  name: "zhangsan",
  age: 10,
  score: [100, 90, 80],
  do: function () {},
};

// 把o1拷贝一份
let o2 = {};

// 拷贝对象的时候，只拷贝一份，被称作浅拷贝

// 分别看o1中有哪些属性，给o2扩展一份
for (let key in o1) {
  // 得到每一个key 把key设置给o2
  o2[key] = o1[key];
}

console.log(o2, o1, o2 === o1); // false

// 浅拷贝后，内部属性如果是一个对象类型，则是同一个对象
console.log(o2.score === o1.score); // true