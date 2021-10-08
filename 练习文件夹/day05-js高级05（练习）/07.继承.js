// 封装一个父类
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Person.prototype.eat = () => {
  console.log("吃饭");
};

// 封装一个子类
function Teacher(name, age, sex, type, classRoom) {
  // 封装函数的继承
  // 实例化子类的时候，调用了父类，并且父类构造函数中的this
  // 应该是指向当前子类的this
  Person.call(this, name, age, sex);
  this.type = type;
  this.classRoom = classRoom;
}

// 2.原型链继承
Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;
Teacher.prototype.say = function () {
    console.log("teach");
}

let t1 = new Teacher("zhangsan", 19, "men", "JS", "0722");
console.log(t1);
console.log(t1.eat, t1.say);