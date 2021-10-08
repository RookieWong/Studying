//放大镜功能
preview();

function preview() {
  var oSmallArea = document.querySelector(".smallArea");
  var oMask = document.querySelector(".smallArea .mask");
  var oSmallImg = document.querySelector(".smallArea img");
  var oBigArea = document.querySelector(".bigArea");
  var oBigImg = document.querySelector(".bigArea img");

  //放大镜的图片默认是数据的第一个图片
  //拿到放大镜路径的数据
  var data = goodData.imgsrc;
  oSmallImg.src = data[0].m;
  oBigImg.src = data[0].b;

  //给放大镜的小图区域绑定鼠标移动事件
  oSmallArea.onmousemove = function (e) {
    //控制蒙版显示
    oMask.style.display = "block";
    //控制大图区域显示
    oBigArea.style.display = "block";

    //控制蒙版移动
    //蒙版的定位值：鼠标到视口的距离 - 蒙版自身的一半 - 小图到视口的距离
    var maskLocation = {
      left:
        e.clientX -
        oMask.offsetWidth / 2 -
        oSmallImg.getBoundingClientRect().left,
      top:
        e.clientY -
        oMask.offsetHeight / 2 -
        oSmallImg.getBoundingClientRect().top,
    };

    //判断临界值
    if (maskLocation.left <= 0) {
      maskLocation.left = 0;
    } else if (maskLocation.left >= oSmallImg.clientWidth - oMask.offsetWidth) {
      maskLocation.left = oSmallImg.clientWidth - oMask.offsetWidth;
    }

    if (maskLocation.top <= 0) {
      maskLocation.top = 0;
    } else if (
      maskLocation.top >=
      oSmallImg.clientHeight - oMask.offsetHeight
    ) {
      maskLocation.top = oSmallImg.clientHeight - oMask.offsetHeight;
    }

    //赋值
    oMask.style.left = maskLocation.left + "px";
    oMask.style.top = maskLocation.top + "px";

    //计算大图的比例公式(横竖比例一样 直接计算)
    // 蒙版可以移动的总距离/大图可以移动的总距离 = 蒙版移动的距离 / 大图移动的距离
    // 大图移动的距离 = 蒙版移动的距离 * 大图可以移动的总距离 /蒙版可以移动的总距离
    //大图可以移动的总距离
    var bigImgAllMove = oBigImg.offsetWidth - oBigArea.clientWidth;
    //蒙版可以移动的距离
    var samllImgAllMove = oSmallImg.clientHeight - oMask.offsetHeight;

    //计算大图移动的距离
    var bigImgMove = {
      left: (maskLocation.left * bigImgAllMove) / samllImgAllMove,
      top: (maskLocation.top * bigImgAllMove) / samllImgAllMove,
    };
    //赋值
    oBigImg.style.left = -bigImgMove.left + "px";
    oBigImg.style.top = -bigImgMove.top + "px";
  };

  //给小图区域绑定移出事件
  oSmallArea.onmouseleave = function () {
    //控制蒙版隐藏
    oMask.style.display = "none";
    //控制大图区域隐藏
    oBigArea.style.display = "none";
  };
}

//缩略图数据
thumbnailData();

function thumbnailData() {
  var oList = document.querySelector(".listOut .list");
  //拿到放大镜路径的数据
  var data = goodData.imgsrc;
  //遍历数据生成对应的结构
  data.forEach(function (item, index) {
    //创建li元素
    var oNewLi = document.createElement("li");
    //创建一个img元素
    var oNewImg = new Image();
    oNewImg.src = item.s;

    //插入
    oNewLi.appendChild(oNewImg);
    oList.appendChild(oNewLi);
  });
}

//缩略图
thumbnail();

function thumbnail() {
  var oRight = document.querySelector(".prescroll .right");
  var oLeft = document.querySelector(".prescroll .left");
  var oItems = document.querySelectorAll(".listOut .list li");
  var oList = document.querySelector(".listOut .list");

  //计算每次移动的距离（2个*一个缩略图的宽度）
  var everyMove = oItems[0].offsetWidth * 2;

  //初始化一个初始位置
  var startMove = 0;

  //计算总共可以位移的距离(可以移动的总数 * 一个的宽度)
  var allMove = (oItems.length - 5) * oItems[0].offsetWidth;

  //点击右侧按钮
  oRight.onclick = function () {
    //点击的时候判断，剩余可走的距离大于等于两张图的时候，则正常走两张，否则直接走到末尾
    if (allMove - startMove >= everyMove) {
      //让容器每次移动两个元素的距离
      startMove += everyMove;

      //赋值
      oList.style.transform = "translateX(-" + startMove + "px)";
    } else {
      startMove = allMove;
      //直接走到末尾
      oList.style.transform = "translateX(-" + startMove + "px)";
    }
  };

  //点击左侧按钮
  oLeft.onclick = function () {
    //startMove倒着走，判断startMove的值是否还大于等于everyMove，如果是，则继续倒退两步，否则直接变为0
    if (startMove >= everyMove) {
      startMove -= everyMove;
      //赋值
      oList.style.transform = "translateX(-" + startMove + "px)";
    } else {
      startMove = 0;
      //直接走到末尾
      oList.style.transform = "translateX(-" + startMove + "px)";
    }
  };
}

//缩略图点击
thumbnailClick();

function thumbnailClick() {
  var oBigImg = document.querySelector(".bigArea img");
  var oSmallImg = document.querySelector(".smallArea img");
  //获取所有的img
  var oImgItems = document.querySelectorAll(".listOut .list li img");
  //拿到放大镜路径的数据
  var data = goodData.imgsrc;

  //遍历图片绑定点击事件
  oImgItems.forEach(function (item, index) {
    item.onclick = function () {
      // 获取当前点击图片对应的大图和中图 设置给放大镜的图片即可
      //index就是当前点击的图片对应的下标
      oBigImg.src = data[index].b;
      oSmallImg.src = data[index].m;
    };
  });
}

//商品价格区域
priceArea();

function priceArea() {
  //拿到放大镜路径的数据
  var data = goodData.goodsDetail;
  var oPriceArea = document.querySelector(".priceArea");
  var str =
    '<h3 class="title">' +
    data.title +
    '</h3>\
                        <p class="con1">' +
    data.recommend +
    '</p>\
                        <div class="price">\
                            <div class="priceDetail">\
                                <p>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</p>\
                                <p>￥ <span>' +
    data.price +
    '</span> 元</p>\
                            </div>\
                            <div class="buy">\
                                <p>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</p>\
                                <p><span>' +
    data.promoteSales.type +
    "</span>" +
    data.promoteSales.content +
    '</p>\
                            </div>\
                        </div>\
                        <div class="support">\
                            <div class="supportDetail">\
                                <p>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</p>\
                                <p>' +
    data.support +
    '</p>\
                            </div>\
                            <div class="address">\
                                <p>配&nbsp;送&nbsp;至</p>\
                                <p>' +
    data.address +
    "</p>\
                            </div>\
                        </div> ";
  //把字符串插入到结构中
  oPriceArea.innerHTML = str;
}

//筛选详情
chooseCon();

function chooseCon() {
  //拿到数据
  var chooseData = goodData.goodsDetail.crumbData;

  var oChooseArea = document.querySelector(".chooseArea");

  //遍历生成dl标签
  chooseData.forEach(function (item, index) {
    //创建dl标签
    var oDl = document.createElement("dl");
    //创建dl中的dt
    var oDt = document.createElement("dt");
    //给dt插入内容
    oDt.textContent = item.title;
    //把dt插入到dl中
    oDl.appendChild(oDt);
    //遍历当前数据中的内容得到对应的dd
    item.data.forEach(function (item, index) {
      //创建dd 并放入内容
      var oDd = document.createElement("dd");
      oDd.textContent = item.type;
      //给每一个dd插入一个自定义属性，保存的是当前选项的价格改变情况
      oDd.dataset.changePrice = item.changePrice;
      //把dd插入到dl中
      oDl.appendChild(oDd);
    });

    //把dl插入到结构中
    oChooseArea.appendChild(oDl);
  });
}

//筛选任务
choose();

function choose() {
  var oChooseInsert = document.querySelector(".chooseInsert");
  var oDls = document.querySelectorAll(".chooseArea dl");

  //初始化一个数组 用来保存用户的选项
  var arr = new Array(oDls.length);
  arr.fill(null);
  // console.log(arr);

  //给每一个的dl中的dd分别绑定点击事件
  //遍历dls得到每一个dl
  oDls.forEach(function (item, i) {
    //item就是当前的某一个dl i就是当前dl所对应的下标
    //获取当前dl中所有的dd 绑定点击事件
    var oDlDds = item.querySelectorAll("dd");
    oDlDds.forEach(function (item, index) {
      //在这个区域中，item就是某一个dd  index就这这个dd的下标
      item.onclick = function () {
        //每次点击的时候清空insert插入的mark标签，然后根据数组再重新添加
        oChooseInsert.textContent = "";
        //当点击的时候先清空所有的样式
        oDlDds.forEach(function (item, index) {
          item.style.color = "#666";
        });
        //给当前点击的元素添加样式
        this.style.color = "red";

        //把当前点的dd放入到数组中对应的位置（一个dl对应一个数组的值）
        //数组中对应的位置就是 当前dd所在的dl的下标（数组中保存的就是用户已经点过的信息）
        arr[i] = this;
        console.log(arr);

        //根据数组，得到对应的用户的选项
        arr.forEach(function (item, index) {
          //如果当前的值存在
          if (item) {
            // 生成对应的mark标签 和 删除按钮
            var oMark = document.createElement("mark");
            oMark.textContent = item.textContent;
            var oDele = document.createElement("a");
            oDele.textContent = "X";
            //在删除按钮上保存当前所在的dl的下标（也就是当前数组值的下标）
            oDele.dataset.index = index;
            oMark.appendChild(oDele);

            //把mark插入到结构中
            oChooseInsert.appendChild(oMark);
          }
        });

        //点击选项的时候 改变价钱，我们根据数组的改变来改变价钱
        //获取商品的单价
        var singlePrice = goodData.goodsDetail.price;
        arr.forEach(function (item, index) {
          if (item) {
            //用单价加上数组中用户选项的值
            singlePrice += +item.dataset.changePrice;
          }
        });
        //把单价设置给元素
        var oItp = document.querySelector(".goodsNum .num input"); //数量
        var priceArea = document.querySelector(".priceDetail span");
        console.log(singlePrice);
        priceArea.textContent = singlePrice * oItp.value;

        //删除功能
        //获取所有的删除按钮
        var oDeles = document.querySelectorAll("mark a");
        oDeles.forEach(function (item, index) {
          item.onclick = function () {
            //点击删除按钮，删除父级mark标签
            this.parentNode.remove();

            //删除当前对应的数组的值(在删除按钮上保存有当前的下标)
            //删除按钮上保存了当前删除的值对应的dl的下标
            arr[this.dataset.index] = null;
            console.log(arr);

            //删除完成之后，要获取当前被删除元素对应的dl中所有的dd
            var oDelesDd = oDls[this.dataset.index].querySelectorAll("dd");
            //先清空当前所有dd的样式，然后给第一个添加默认即可
            oDelesDd.forEach(function (item, index) {
              item.style.color = "#333";
            });
            oDelesDd[0].style.color = "red";

            //删除选项的时候 改变价钱，我们根据数组的改变来改变价钱
            //获取商品的单价
            var singlePrice = goodData.goodsDetail.price;
            arr.forEach(function (item, index) {
              if (item) {
                //用单价加上数组中用户选项的值
                singlePrice += +item.dataset.changePrice;
              }
            });
            //把单价设置给元素
            var oItp = document.querySelector(".goodsNum .num input"); //数量
            var priceArea = document.querySelector(".priceDetail span");
            console.log(singlePrice);
            priceArea.textContent = singlePrice * oItp.value;
          };
        });
      };
    });
  });
}

//数量的加减
numChange();

function numChange() {
  var oPlus = document.querySelector(".goodsNum .num .plus");
  var oMins = document.querySelector(".goodsNum .num .mins");
  var oItp = document.querySelector(".goodsNum .num input");
  var priceArea = document.querySelector(".priceDetail span");
  //初始化一个默认值
  var num = 1;
  //给加号绑定事件
  oPlus.onclick = function () {
    //点击的时候获取当前真实的价格
    var nowPrice = +priceArea.textContent;
    console.log(nowPrice);
    num++;
    oItp.value = num;

    // 计算改变数量以后的价格
    var totalPrice = (nowPrice / (num - 1)) * num;
    //赋值
    priceArea.textContent = totalPrice;
  };

  //给减号绑定事件
  oMins.onclick = function () {
    //点击的时候获取当前真实的价格
    var nowPrice = +priceArea.textContent;
    num--;
    if (num < 1) {
      num = 1;
      oItp.value = num;
      return;
    }
    oItp.value = num;

    // 计算改变数量以后的价格
    var totalPrice = (nowPrice / (num + 1)) * num;
    //赋值
    priceArea.textContent = totalPrice;
  };
}

//选项卡切换
function Tab(titles, cons) {
  this.titles = titles;
  this.cons = cons;
  var _this = this;
  this.titles.forEach(function (item, index) {
    item.onclick = function () {
      _this.click(item, index);
    };
  });
}
Tab.prototype.click = function (item, index) {
  var _this = this;
  this.titles.forEach(function (item, index) {
    item.classList.remove("active");
    _this.cons[index].classList.remove("active");
  });

  item.classList.add("active");
  this.cons[index].classList.add("active");
};

//侧边栏的tab切换
tab1();

function tab1() {
  var oTitles = document.querySelectorAll(".tabTitle h4");
  var oCons = document.querySelectorAll(".tabContent .tab-pane");
  new Tab(oTitles, oCons);
}

//详情页tab切换
tab2();

function tab2() {
  var oTitles = document.querySelectorAll(".tab-wraped li");
  var oCons = document.querySelectorAll(".tab-content .tab-pane");
  new Tab(oTitles, oCons);
}

//侧边栏
aside();

function aside() {
  var oToolBar = document.querySelector(".toolBar");
  var oMenu = document.querySelector(".toolBar .menu");

  //初始化一个开关
  var flag = true; //true代表当前right是-294px

  oMenu.onclick = function () {
    //判断开关的当前状态
    if (flag) {
      oToolBar.style.right = 0;
    } else {
      oToolBar.style.right = "-294px";
    }

    flag = !flag;
  };
}
