console.log("I am woker");

// 接收(onmessage)到主线程的数据后再执行this指向当前的分线程

// console.log(this);

this.onmessage = function (e) {
  // 发送数据的具体信息都在事件对象中，数据在e.data上
  console.log("分线程", e);
  let num = 0;
  for (let i = 0; i < e.data; i++) {
    num += Math.sqrt(i);
  }
  postMessage(num);
  //   console.log(num);

  // 当num最终计算完成的时候，要把num发送给主线程
  //   close();
};
