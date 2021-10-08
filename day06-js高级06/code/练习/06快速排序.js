function quickSort(arr) {
  // 排序前先判断数组的长度，如果长度小于1的时候，则直接把当前数组返回即可
  if (arr.length <= 1) {
    return arr;
  }
  //选出一个值
  let center = arr.shift();

  //   定义左右两个数组
  let left = [];
  let right = [];

  //把小于center的放在左边数组中，把大于center的放在右边数组中
  arr.forEach((item, index) => {
    item < center ? left.push(item) : right.push(item);
  });

  //   合并左中右三个数组
  let result = quickSort(left).concat(center, quickSort(right));
  //   函数应该返回左中右合并后的值
  return result;
}

//使用
let arr = [30, 12, 43, 5, 12, 76, 34, 21, 3, 10];
let result = quickSort(arr);
console.log(result);
