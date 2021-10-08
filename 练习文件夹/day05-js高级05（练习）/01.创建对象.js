// 使用基本方式创建对象
let student1 = {
    name: "zhangsan",
    sex: "男",
    age: 20
}

// 给对象添加方法
student1.study = function () {
    console.log("我要精通js");
}

let student2 = {
    name: "lisi",
    sex: "女",
    age: 18
}
// 使用箭头函数添加方法
student2.study = () => {
    console.log("我要找JS大神");
}

// 测试
console.dir(student1);
console.dir(student2);
student1.study();  //我要精通js
student2.study();  //我要找JS大神
// { name: 'zhangsan', sex: '男', age: 20, study: [Function] }
// { name: 'lisi', sex: '女', age: 18, study: [Function] } 
// 全部运行成功
// 总结：使用字面量来创建对象，这种方法代码太冗余。发现，箭头函数也可以给变量添加方法


console.log("------------------------");

/* 工厂模式：
        缺点：无法辨别当前的对象是哪一类    
*/

function students(name, age, sex) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    obj.study = () => {
        console.log("js");
    }
    return obj;
}
let s1 = students("zhangsan", 20 , "男");
let s2 = students("lisi", 30, "女");
console.dir(s1);
console.dir(s2);
console.log(s1.constructor);  //[Function: Object]
console.dir(s1.prototype);  //undefined

/* 
    构造函数的创建方式：
        构造函数一定是被new调用的，而new操作符本身可以返回一个对象，所以
        在构造函数中不粗要创建一个对象，构造函数的this指向当前new后返回的
        对象
    缺点：方法不能共享
*/

function Student(name, age, sex) {
    // 构造函数的this指向实例化对象
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.study = function() {
        console.log("js");
    }
}

let ss1 = new Student("zhangsan", 20, "男");
let ss2 = new Student("lisi", 21, "女");
console.log(ss1, ss2);
console.log(ss1.constructor);  //[Function: Student]
console.log(ss1.study === ss2.study); // false 每个实例对象各自拥有一个方法

console.log("构造函数 + 原型方式");
function Student(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Student.prototype.study = () => {
    // 原型方法中的this指向实例化对象
    console.log("js");
}

let sss1 = new Student("zhangsan", 40, "男");
let sss2 = new Student("lisi", 50, "女");

console.log(sss1.study === sss2.study); // true
console.log(sss1,sss2); // 同名构造函数会被后面的覆盖