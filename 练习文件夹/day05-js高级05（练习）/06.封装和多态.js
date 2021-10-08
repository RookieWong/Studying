function Dog() {}

Dog.prototype.eat = () => {
  console.log("吃骨头");
};

function Cat() {}
Cat.prototype.eat = () => {
  console.log("吃鱼");
};

let cat1 = new Cat();
let dog1 = new Dog();

// 封装一条指令
function goToEat(o) {
  o.eat();
}

goToEat(cat1); // 吃鱼
goToEat(dog1); // 吃骨头
