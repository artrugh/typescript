interface FirstPerson {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user11: FirstPerson;

user11 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name );
  },
};

user11.greet('Hi there, I am')

interface firstNamed {
  readonly firstName: string;
  // optional property
  nickname?: string;
}

interface secondNamed {
  readonly secondName: string;
}

interface Greetable extends firstNamed, secondNamed {
  greet(phrase: string): void;
}
// the implementation of Greetable forces to have a Greetable method;
class Person implements Greetable {
  // define the properties
  firstName: string;
  secondName: string;
  nickname?: string;
  // you can add more properties
  age?: number;

  // initialize the properties
  constructor(
    firstName: string,
    secondName: string,
    age?: number,
    nickname: string = "Titi"
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    if (nickname) {
      this.nickname = nickname;
    }
    if (age) {
      this.age = age;
    }
  }

  // methods
  greet(phrase: string) {
    if (!this.age) {
      console.log(
        phrase +
          " " +
          this.firstName +
          " " +
          this.secondName +
          ", alias: " +
          this.nickname
      );
    } else {
      console.log("You are " + this.age + " years old!");
    }
  }
}

let user1: Greetable;
user1 = new Person("Max", "Schumacher");

// it readonly
// user1.name = 'Alton'

user1.greet("Hi there, I am");

// type function
// type AddFn = (n1: number, n2: number) => number;
// interface
interface AddFn {
  (n1: number, n2: number): number;
}

let addNum: AddFn;

addNum = (n1: number, n2: number) => {
  return n1 + n2;
};

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let search: SearchFunc;
search = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

console.log(search("Hola", "a"));

// ------- //

interface SquareConfig {
  color?: string;
  width?: number;
  [index: string]: any;
}

function createSquare(config: SquareConfig): void {
  console.log(config);
}

// doesn't compile because color is not defined as a property
// let mySquare = createSquare({ colour: "red", width: 100 });

// SOLUTIONS

// 1. add : a new property type any in the interface
// [propName: string]: any;
let mySquare = createSquare({ colour: "red", width: 100, any: { type: "a" } });

// 2. add as SquareConfig to the called function
// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

// 3. another way is to assign the object to another variable
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);
// The above workaround will work as long as you have a common property between squareOptions and SquareConfig.
// In this example, it was the property width. It will however, fail if the variable does not have any common object property. For example:

// let mySquare = createSquare({ colour: "red", width: 100 });

// indexable types

interface StringArray {
  [index: number]: { name: string };
}

let myArray: StringArray;

myArray = [{ name: "Bobu" }, { name: "Jon" }];
let myString = myArray;

console.log(myString[0]);

interface NumberDictionary {
  [index: string]: number | string;
  length: number | string; // ok, length is a number
  name: string; // error, the type of 'name' is not a subtype of the indexer
}

let myObj: NumberDictionary;

myObj = { length: "30", name: "John" };
let myName = myObj["name"];

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArrayRead: ReadonlyStringArray = ["Alice", "Bob"];
// myArrayRead[2] = "Mallory"; // error!
let a = myArrayRead[1];
