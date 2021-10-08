function Student(name, age, sex) {
  // 以下是公有属性
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.do = function () {};
  // 这是私有方法
  function eat() {
    console.log("I love eatting");
  }
  //   私有属性
  let height = 100;
}

let s1 = new Student("zhangsan", 19, "man");
s1.study = () => {
  console.log("学习js");
};

s1.color = "yellow";
console.log(s1);

// 公有方法
Student.prototype.learning = () => {
    console.log("js");
}

// 静态属性
Student.nation = "China";

console.log(Student);  // 查看静态方法