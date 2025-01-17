function foo(a, b) {
  // Handle null and undefined values
  a = a === null || a === undefined ? 0 : a; 
  b = b === null || b === undefined ? 0 : b; 

  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo(undefined,2));//2