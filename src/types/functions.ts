function add(num1: number, num2: number = 1) {
  return num1 + num2;
}

// initial value
// initial values should always be as last params
function rest(num1: number, num2: number = 2) {
  return num1 - num2;
}
console.log(rest(1));

function addUnlimetedNumbers(...numbers: number[]) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(addUnlimetedNumbers(4, 3, 2, 4, 5, 6));

function printNum(num: number): void {
  console.log("Return: " + num);
}

// DEFINE THE FUNCTION
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(10, 4));

// CALLBACK
function addAndHandle(n1: number, n2: number, cb: (num: number)=> void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 4, (result) => {
  console.log("result", result);
  // in this case it doesn't return an error:
  // :void doesn't force us to don't return something
  // it doesn't care about the return statement
  return result; 
});