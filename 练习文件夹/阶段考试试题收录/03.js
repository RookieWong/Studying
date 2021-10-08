var arr = [
  {
    menthod: "get",
    fn: function () {
      console.log(this);
    },
  },
];

Array.prototype.forEach = function (cb) {
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    var menthod = this[i].menthod; // 'get'
    var fn = this[i].fn; // function () {console.log(this);},
    cb.call(this, fn.bind(obj), menthod); // this = arr
  }
};

arr.forEach(function (fn, menthod) {
  fn(); // fn.bind(obj)  obj = {}
  console.log(this); // this = arr,
});

var now = +new Date(); //当前时间
  console.log(now);
