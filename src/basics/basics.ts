interface test {
  a: string;
  b: string;
  c: number;
}
type test2 = keyof test;

type test3 = "uno" | "dos" | "tres";
type test4 = { [k in test3]: string };
type test5 = test & test4;

function addNumbers(
    n1: number,
    n2: number,
    printResult: boolean,
    message: string
  ): number | void {
    const result = n1 + n2;
    if (printResult) {
      console.log(message + result);
    } else {
      return result;
    }
  }
  
  const addNumbersArrayFn = (
    n1: number,
    n2: number,
    printResult: boolean,
    message: string
  ): number | void => {
    const result = n1 + n2;
    if (printResult) {
      console.log(message + result);
    } else {
      return result;
    }
  };
  
  // bad practice
  // let num1:number = 4;
  let n2: number;
  n2 = 4;
  // ||
  const num1 = 4;
  const num2 = 3;
  const printResult = true;
  const msg = "Result is: ";
  
  addNumbers(num1, num2, printResult, msg);
  addNumbersArrayFn(num1, num2, printResult, msg);