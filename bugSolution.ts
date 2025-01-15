function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function checkedAdd(a: number | undefined, b: number | undefined): number {
  if (a === undefined || b === undefined) {
    return 0; // Or handle the undefined case appropriately
  }
  return a + b;
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 5); // result2 is 5

// Solution: Handle potential undefined values
const result3 = checkedAdd(add(5,3), subtract(10,5)); // result3 is 13
console.log(result3); // result3 is 13 