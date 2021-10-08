//快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let center = arr.shift();
  let left = [];
  let right = [];
  arr.forEach(function (item, index) {
    item < center ? left.push(item) : right.push(item);
  });
  let result = quickSort(left).concat(center, quickSort(right));
  return result;
}

//使用
let arr = [30, 12, 43, 5, 12, 76, 34, 21, 3, 10];
let result = quickSort(arr);
console.log(result);

let ar = [1, 2, 3];
ar.shift();
console.log(ar);
