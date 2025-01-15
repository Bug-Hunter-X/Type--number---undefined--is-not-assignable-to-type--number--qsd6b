function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 5); // result2 is 5

//This is the buggy part
const result3 = add(add(5,3), subtract(10,5)); // result3 should be 13
console.log(result3); // result3 is NaN