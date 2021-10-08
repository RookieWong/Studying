// const s = new Date().getSeconds();

// setTimeout(function() {
//   // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 500);

// while(true) {
//     console.log(new Date().getSeconds() - s);
//   if(new Date().getSeconds() - s >= 2) {
//     console.log("Good, looped for 2 seconds");
//     break;
//   }
// }


// console.time("t");
// let setTime1 = setTimeout(() => {
//     console.log("OK");
// }, 2000);

// console.timeLog("t");
// console.timeEnd("t");

// 多线程运算
let wo = new Worker("work.js");

// 向分线程发送数据
wo.postMessage(10000000);

// 当分线程执行完成是，则绑定事件开始接受分线程执行的数据，依然使用onmessage接受

wo.onmessage = function(e) {
    console.log(e);
}