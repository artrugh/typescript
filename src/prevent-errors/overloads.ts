// both, types or interfaces can be used here!

type CombinableNumStrig = string | number;
// type guards
function addCombine(a: number, b: number): number;
function addCombine(a: string, b: string): string;
function addCombine(a: string, b: number): string;
function addCombine(a: number, b: string): string;
function addCombine(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addCombine("John", 1);
result.split(" ");
