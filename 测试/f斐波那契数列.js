function fib(N) {
  let a = 0,
    b = 1;
  let l1, l2;
  if (N == 0) return 0;
  if (N == 1) return 1;
  if (N == 2) return 1;
  if (N == 3) return 2;
  if (N % 2 == 0) {
    l1 = b;
    b = a + b;
    for (let i = 1; i <= (N - 2) / 2; i++) {
      l2 = b;
      b = l1 + b;
      l1 = b;
      b = l2 + b;
    }
    return b;
  } else {
    l1 = b;
    b = a + b;
    l2 = b;
    b = l1 + b;
    for (let i = 1; i <= (N - 3) / 2; i++) {
      l1 = b;
      b = l2 + b;
      l2 = b;
      b = l1 + b;
    }
    return b;
  }
}

console.log(fib(50));


