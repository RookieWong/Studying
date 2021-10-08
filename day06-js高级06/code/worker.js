console.log("worker");

//接收到主线程的数据以后再执行 使用onmessage事件接收，this指向当前的分线程
console.log("this", this);

this.onmessage = function (e) {
    //发送数据的具体信息都在事件对象中  数据在e.data上
    console.log("e", e);

    //开始运算
    var num = 0;
    for (var i = 0; i < e.data; i++) {
        num += Math.sqrt(i);
    }

    //当num最终计算完成的时候，要把num发送回主线程
    this.postMessage(num);

    //分线程也有关闭自己的权利
    this.close();
}