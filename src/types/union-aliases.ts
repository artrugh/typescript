type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConvertion: ConversionDescriptor 
) {
  let result;
  if (
    (typeof input1 === "number" && input2 === "number") ||
    resultConvertion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 36, "as-number");
console.log(combinedAges);

const combinedNames = combine("Juan", "Peter", "as-text");
console.log(combinedNames);

const combinedStringAges = combine("35", "24", "as-text");
console.log(combinedStringAges);
