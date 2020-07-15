// basic decorator
function Logger() {
  console.log("logging...");
}

// as a factory arguments can be past
function LoggerFactory(logString: string) {
  return function (_: Function) {
    console.log(logString);
  };
}

// it is execute when the class is defined
const WithTemplateExecute = (template: string, hookId: string) => (
  constructor: any
) => {
  const hookEl = document.getElementById(hookId);
  const p = new constructor();
  if (hookEl) {
    hookEl.innerHTML = template;
    document.querySelector("h1")!.textContent = `hi ${p.name}!`;
  }
};

// is is execute when the class is instantiate
function WithTemplateInstance(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          document.querySelector("h1")!.textContent = `hi ${this.name}!`;
        }
      }
    };
  };
}

// @Logger
// @LoggerFactory("LOGGING-PERSON")
@WithTemplateInstance("<h1>My Person Object  </h1>", "app")
class newPersonF {
  name = "Tim";
  constructor() {
    console.log(this.name);
  }
}

const Peter = new newPersonF();

function LogProperty(target: any, propertyName: string) {
  console.log("Property DECORATOR!");
  console.log("target", target, "porpertyName", propertyName);
}

function LogAccessor(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor DECORATOR!");
  console.log("target", target);
  console.log("name", name);
  console.log("decriptor", descriptor);
}
function LogMethod(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("Method DECORATOR!");
  console.log("target", target);
  console.log("name", name);
  console.log("decriptor", descriptor);
  return {};
}

function LogParameter(
  target: any,
  name: string | Symbol,
  position: number
): void {
  console.log("Parameter DECORATOR!");
  console.log("target", target);
  console.log("name", name);
  console.log("position", position);
}

class Product {
  @LogProperty
  title: string;

  constructor(title: string, private _price: number) {
    this.title = title;
  }

  @LogAccessor
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }
  @LogMethod
  getPriceWithTax(@LogParameter tax: number) {
    return this._price * (1 + tax);
  }
}

const b1 = new Product("Book One", 1);
const b2 = new Product("Book Two", 2);

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // get the original Method
  const origilnalMethod = descriptor.value;
  // create a new PropDescriptor
  const adjDescriptor: PropertyDescriptor = {
    configurable: false,
    enumerable: false,
    // set the original method to the class
    get() {
      const boundFn = origilnalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "this works!";
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const btn = document.querySelector("button")!;

if (btn) {
  btn.addEventListener("click", p.showMessage);
}