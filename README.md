# TypeScript

- dev tool which helps during compilation
- doesn't work at runtime
- doesn't run in browsers
- add extra sanity check

## topics

- types
  - primitives
    - number
    - string
    - boolean
    - combine = number | string | boolean
    - any = any kind, default type
    - unknown = the variable has a type but it is unknown
    - undefined
  - objects
    - enum Name { ADMIN, USER }
  - arrays
    - arrays
      - string[] | numbers[] | (string | number)[] ...
    - tuple
      - [number, string] /only push() is allowed
    - customized
      - literal
        - name: 'x' | 'y'
      - custom type
        - type customTypeName: 'x' | number
  - functions
    - void
      - don't return || don't return nothing or undefined
    - never
      - the script will crash (ex throw)
    - undefined
      - return;
    - cb
      - function(n1:number cb:(n1:number):number){}
  - !
    - ignore an error
- classes
  - type
    - abstract
    - singleton
  - properties
    - access modifiers
      - public
      - private
      - protected
      - optional
    - default values
  - constructors
    - single
    - private
  - methods
    - static
    - abstract
    - getter & setter
  - inheritance
    - super
- interfaces
  - access modifiers
    - readonly
  - indexable types
  - function types
- operators
  - intersection &
- prevent mistyp and errors
  - guards
  - casting
  - discriminated unions
  - optional chaining
  - index properties
  - nullish coalescing
  - overloads
- generics
  - types
    - generic functions
    - generic classes
  - constrains
  - parameters
  - utilities
    - Partial
    - Readonly
- promises
- decorators
  - factory decorators
  - AutoBind
  - Validation
- webpack
- third party libraries

### tsconfig

cli:
tsc --init
auto create tsconfig.json

npm i --save-dev typescript
especify typescript to prevent future error through versions

#### options

tsconfig.json

- "exclude": ["filename.ts" , "*.dev.ts", "**/*.dev.ts"]

  - specific file, all files .dev.ts, all file in any folder .dev.ts

- "include": ["app.ts"]

  - in this case you have to include all the files you want to include

- "files": ["filename.ts"]

- "target": "es5" || "es6"

  - defines the browsers in which typeScrypt will be compiled

- "lib": []

  - libraries: Example: "dom", "es6", "dom.iterable", "script.host"
    exactly same default lib included by target: "es6"

- "sourceMap": "true"

  - is a very useful tool to access to our .ts sources in the browser for debbuging purposes

- "outDir": "./dist"

  - dist folder = hole outputs.js
    rember to include the correct path in the .html

- "rootDir": "./src"

  - src folder = hole inputs.ts
    in this case only this specific folder is compiled

- "removeComments": "true"

- "noEmit": "true"

  - no emit js files

- "downlevelIteration": "true"

  - give a better compiler for old browsers / usually used with loops which can give some issues

- "noEmmitOnError": "true""

  - if there is any error it will not compile, any file will be compile!

- "strictNullChecks": "false"

  - regarding to potentially null values (ex dom html elements)

- "strictNullChecks": "false"

  - check if accidentaly bind is not using in your script

- "noUnusedLocals": "true"

- "noUnusedParameters": "true"

- "noImplicitReturns": "true"
  - display warnings

#### documentation

[config file](https://aka.ms/tsconfig.json)

[tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

[compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

[debugger-vs](https://code.visualstudio.com/docs/typescript/typescript-debugging)

### types

```TypeScript

type test = {
  a: string;
  b: string;
  c: number;
}

type test2 = keyof test;
// "a" | "b" | "c"
type test3 = "uno" | "dos" | "tres";
type test4 = { [k in test3]: string };
// {uno:string, dos:string, tres:string}
type test5 = test & test4;
// {a:string, b:string, c:string, uno:string, dos:string, tres:string}
```

[types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### classes

#### access modifier

- private
- public
- protected
- ? (optional)

**Private methods** members are accessible only from inside the class.
**Protected methods** members are accessible from inside the class and extending class as well.
**readonly** they can only be set once, they **can not** be changed after the object has been initialized

#### getter & setter

methods that allow access to properties

##### getter

```TypeScript
get mostRecentReport () {
return this.lastReport
}
// called
department.mostRecentReport;
```

##### setter

```TypeScript
set mostRecentReport (report: string) {
this.lastReport = report
}

department.mostRecentReport = 'Last Report' // called passing the argument as a value
```

#### static

static method or variable don't need to be instances
you call it directly on the class without initialization as a literal Obj

```TypeScript
static ficalYear = 2020;
static greet(phrase: string) {
console.log(phrase + ' ' + this.name)
}
const fiscalYear = Department.fiscalYear
const greet = Department.greet('Hello')
const department = new Department(...) // error
```

**IMPORTANT**

if you want to access to them from inside you will need to call it like this.

```TypeScript
static fiscalYear = 2020
constructor(){
console.log(Department.fiscalYear)
console.log(this.fiscalYear) // 'this.' doesn't access to it
}
```

#### abstract

allows classes based in other classes share method or properties

**IMPORTANT**

- can not be instantiate
- can only be inherited
- abstract methods should be implemented in each inheritated class which extends the abstract class
- force that all the inheritated classes use the abstract method

#### private constructor

ensure that this class can only be instantiated once
to instantiated a static method is requeried, it can private
_REMEMBER_ static method doesn't need to instantiated the class

```TypeScript
private static instance: AccountingDepartment;
static getInstance() {
if(this.instance){
return this.instance
}
this.instance = new AccountingDepartment(...);
return this.instance;
}
const accountingDepartment = AccountingDepartment.getInstance();
const accountingDepartment1 = AccountingDepartment.getInstance(); // this will return the same instance
```

### inheritance

allows to inherit properties and methods from the extended class
super contructor allows to access to the inherited properties

```TypeScript
constructor(id: string, public admins: string[]) {
super(id, '34D638');
}
```

**IMPORTANT** a class CAN NOT extends multiple classes, however a interface can

### interfaces

- describe the structure of an object or function
- ensure and enforce that a class has specif methods
- can be implemented in classes
- they have any implementation at all / only set strucnture and funtionalities

[interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

#### they look like a **custom type** but there are some differences

- they can be implemented in multiple classes

```TypeScript
  interface Greetable {
  name: string;
  greet(phrase: string): void;
  }

  class Person implements Greetable {
  constructor(public name: string){}
  greet(phrase:string){
  console.log(phrase)
  }
  ...
  }
```

- as well a class can implement as many interfaces as it wants

```TypeScript
  class Person implements Greetable, Namable {
  ...
  }
```

- they share functionalities among different classes;

#### they look like a **abstract class** but there are some differences

- they don't have implementation details at all
- they can have not only overwrittenable method, but also concrete methods
- they can extend multiple others interfaces while classes can only extend a single class

  ```TypeScript
  interface firstNamed {
  readonly firstName: string;
  }
  interface secondNamed {
  readonly secondName: string;
  }
  interface Greetable extends firstNamed, secondNamed, as many as you want... {
  // properties (firstName, secondName) don't need to be assign here but in the class
  }
  ```

#### modifiers in interfaces

only readonly and ? (optionaly) are allowed(same as common type)

**IMPORTANT** be sure modifiers are the same between interfaces, functions and classes

#### interface as a function type

```TypeScript
interface addFn {
(n1: number, n2:number): number
}
let add: addFn;
add = (n1:number, n2:number) => n1 + n2
```

### operator

#### intersection

can intersect two or more types as well as interfaces using &

```TypeScript
type Universal = Combinable & Numeric;
type ElevatedEmployee = Admin & Employee;
```

### prevent mistyp and errors

#### guards

prevent possible errors
runtime pure js no typescript
general: typeof 'string'
with LiteralObjects: x in obj
with classes: x is instanceof class

```TypeScript
if ("priviliges" in obj) {}
if ("startDate" in obj) {}
if (obj instanceof Admin) // better: eliminate the risk of mistyp ing
```

#### casting

access to the dom
prevent null values

```TypeScript
const userInputEl = document.getElementById("user-input")! as HTMLInputElement;
// or
const userInputEl = document.getElementById("user-input");
if(userINputEl) {
(userInputEl as HTMLInputElement).value = 'Hi' // wrap the element
}
```

#### discriminated unions

prevent typos errors using one common prop in differ interfaces

```TypeScript
interface Bird {
type: 'bird';
flyingSpeed: number
}
interface Horse {
type: 'horse';
running: number
}
type Animal = Bird | Horse
function moveAnimal(animal: Animal){
let speed;
switch (animal:type){
case 'bird':
speed = animal.flyingSpeed;
break;
case 'horse':
speed = animal.runningSpeed;
break;
}
return speed;
}
moveAnimal({type: 'bird', flyingSpeed: 40})
```

#### index properties

allow to type properties(keys and values) preventing error for properties types which don't match

```TypeScript
interface ErrorContainer {
[prop: string]: string;
}

const ErrorBag: ErrorContainer = {
email: "Not avalid email",
username: "Must start with a capital letter",
1: "Should be a unique ID" // OK, a number can converted to a string
};
```

#### optional chaining

prevent undefined properties

```TypeScript
const userData = {
job: { title: "CEO"}
}
const title = userData?.job?.title;
```

#### nullish coalescing

set a value when it is undefined or null

```TypeScript
const fetchedData = '';
const storedData = fetchedData ?? 'DEFAULT';
```

#### overloads

```TypeScript
type Combinable = string | number;

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
```

### generics

types variables which allow to keep some flexibility to our types
they lock in a certain type through the entire class or function

```TypeScript
function indentity<T>(arg: T):T{
return arg
}

// call the function - define the type <string> | <number>

let output = identity<string>('Hey');
let output = identity('Hey') // or simply

let myIdentity: <T>(arg: T) => T = identity; // as well
let myIdentity: <U>(arg: U) => U = identity; // doesn't matter how the generic is called if it is consistent in it structure
```

[generics](https://www.typescriptlang.org/docs/handbook/generics.html)

#### generic functions

##### generics with object literal

```TypeScript
let myIdentity: {<T>(arg: T): T} = identitity
```

##### generics with interfaces

```TypeScript
interface GenericIdentityFn {
<T>(arg:T):T;
}
function identity<T>(arg:T)T{return T}
let myIdentity: GenericIdetityFn = identity
```

the generic can also be written out of the interface being visible for all the member of the interface

```TypeScript
interface GenericIdentityFn<T> {
(arg:T):T;
}
```

##### generics extend

```TypeScript
function indentity<T extends string>(arg: T):T{
return arg
}

let output = identity<object>('Hey'); // error
let output = identity({greet: 'Hey'}) // error
let output = identity<string>('Hey'); // OK
```

#### contrains

// doesn't work with any type, but it is abble to print the length
// length should be past

```TypeScript
interface Lengthy {
length: number;
}
function loggingIndentity<T extends Lengthy>(arg: T){
console.log(arg.length);
}

loggingIdendity({length: 10, value: 3})
```

#### types params

get the property of an obj by it key

```TypeScript
function getProp<T, K extends keyof T>(obj: T, key: K){
return obj[key]
}
let x = { a: 1, b:2, c:3}
getProp(x, 'a') // 1
getProp(x, 'm') // error
```

#### generic Classes

```TypeScript
class Generic <T> {
zeroValue: T;
add: (x:T, y:T) => T;
}
let myGenericNumber = new Generic<number>()
// or
let myGenericString = new Generic<string>()
```

### promises

```Typescript
type fetchHTTP = (url: string) => Promise<Array<Employee| string>>;
interface fetchRequest {
    (url: string): Promise<Array<Employee | string>>;
}
```

### decorators

in tsconfig
"target": "es6",
"experimentalDecorators": true,

decorators are functions and execute when classes are defined not instantiated
it is not neccesary to instantiate a class at all to use decorators
they provide extra utilities to developers

**IMPORTANT** if it is needed to execute a decorator when a class is instantiated -NOT EXECUTED-, just a new anonimus class should be return in the decorator.

[decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)

#### factory decorators

allow to customize decorators passing arguments

```TypeScript
function LoggerFactory(logString: string) {
return function (constructor: Function) {
console.log(logString);
console.log(constructor);
};
}
@LoggerFactory('LOGGING-PERSON')
class newPerson {
name = "Tim";
constructor() {
console.log(this.name);
}
}
```

### webpack

building and orchestration tool
reduce the amount of HTPP requests
bundle .ts in a bundle.js transforming .ts in .js
optimize code
provide a live-server

[webpack](https://webpack.js.org/)

#### webpack-dependencies

cli:

npm i --save-dev webpack webpack-cli webpack-dev-server clean-webpack-plugin ts-loader typescript

##### tsconfig.json

**IMPORTANT**

```Json
{"target": "es6", "module": "es2015", "outDir": "./dist", "sourceMap": true,}
```

**IMPORTANT**

```Json
"rootDir": // is not more neccesary, webpack does this job
```

##### webpack.config.js

config:

```JavaScript
module.exports = {
// ...
devtool: "inline-source-map",
publicPath: "dist"
// create bundle.js in memory in development mode
mode: "develoment"
}
```

##### webpack.config.prod.js

config:

```JavaScript
const CleanPlugin = require("clean-webpack-plugin")

module.exports = {
// ...
plugins: [
// before write the bundle.js clean everything there
new CleanPlugin.CleanWebpackPlugin()
]
}
```

##### \*.ts files

**IMPORTANT**

remove all the '.js' extension from \*.ts imports

**NOT**
~~import { Person } from './Person.js'~~
**OK**

```JavaScript
import { Person} from './Person'
```

### third party libraries

#### js libraries

**IMPORTANT**
third libraries which were built in javascript should be convert to typescript
otherwise they get an error, because typescript can not compile it

convers lodash js lib in ts
allow to use vanilla js libraries in ts
npm i --save-dev @types/lodash

for global js

```TypeScript
declare const GLOBAL: string;
```

#### ts libraries

##### class-transformer

transforms fetched plain data into classes
npm i --save-dev class-transformer reflect-metadata

```TypeScript
// remember
import 'reflect-metadata';

const loadedProducts = plainToClass(Class, data[]);
```

[documentation](https://github.com/typestack/class-transformer)

##### class-validator

npm i --save-dev class-validator

remember
tsconfig.json

```Json
"experimentalDecorators": true
```

useDecorators

```TypeScript
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
export class Product {
  @IsNotEmpty()
  title: string;
  @IsNumber()
  @IsPositive()
  price: number;
  constructor(){}
}

import { validate } from 'class-validator';
const newProd = {title: 'a book', price: 30}
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// use try{}catch(e){} as well
```

[documentation](https://github.com/typestack/class-validator)
