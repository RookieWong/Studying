function Student(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Student.prototype.study = function () {
  console.log("js");
};

// 函数传入构造函数和其他参数
function myNew(Fn) {
  let o = {};
  // 获取参数
  let arg = Array.from(arguments).slice(1);
  // 给Fn绑定this指向
  let res = Fn.apply(o, arg);
  // 修改原型链
  o.__proto__ = Fn.prototype;

  // new的构造函数如果return 对象，则返回的是这个对象
  if (
    (typeof res === "object" && res !== null) ||
    typeof result === "function"
  ) {
    return result;
  }
  return o;
}

let s1 = myNew(Student, "zhangsan", 20, "man");
console.log(s1); // Student { name: 'zhangsan', age: 20, sex: 'man' }

console.log(typeof Function);
