function Student(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  return {};
}

Student.prototype.study = function () {
  console.log("js");
};

function myNew(constr) {
  let o = {};
  let arg = Array.from(arguments).slice(1);
  let result = constr.apply(o, orig);
  o.__proto__ = constr.prototype;
  if (
    (typeof result === "object" && result !== null) ||
    typeof result === "function"
  ) {
    return result;
  }
  return o;
}
