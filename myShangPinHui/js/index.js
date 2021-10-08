// 侧边栏点击移动效果
let oToolBar = document.querySelector(".toolBar");
let oMenu = document.querySelector(".menu");
// 设置变量保存侧边栏开合状态
let flag = true;
oMenu.onclick = () => {
  if (flag) {
    oToolBar.style.right = 0 + "px";
    flag = !flag;
  } else {
    oToolBar.style.right = -294 + "px";
    flag = !flag;
  }
};

