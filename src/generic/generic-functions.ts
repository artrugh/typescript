// GENERICS FUNCTIONS

const names: Array<string> = ["juan"];
names[0].split(" ");

const promise: Promise<object> = new Promise((res, _) => {
  res({ status: 200, data: {} });
});

//  function merge (objA: object, objB: object) {
//      return {...objA, ...objB}
//  }

// return intersection of the two objects with different types
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge(
  { name: "Kral", age: 30 },
  { surname: "Evens", name: "Peter", hobbies: [], 30: 10 }
);
// error
console.log(mergedObj.age, mergedObj.name);


interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(el: T): [T, string] {
  let descriptionText = "Got no value";
  if (el.length > 1) {
    descriptionText = "Got " + el.length + " elements";
  }
  return [el, descriptionText];
}
console.log(countAndDescribe("Hey you!"));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractAndConvert({name: 'Tim'}, 'name')

// function indentity (arg: number) : number {
//   return arg
// }

// function indentity<T>(arg:T): T {
//   return arg
// }

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity;
