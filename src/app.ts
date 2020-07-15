import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate, validateOrReject } from "class-validator";
import { Product} from "./libraries/class-transformer/products.model";
import { fetchEmployees, url} from './promises/promises';
import { accounting2, employee1, fiscalYear } from "./classes/classes";
import { shuffle} from './libraries/lodash'

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProd = new Product("", 5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

const newBook = new Product("a new book", 5.99);

validateOrReject(newBook).catch(errors => {
    console.log("Promise rejected (validation failed). Errors: ", errors);
});

async function validateOrRejectExample(input: Product) {

    try {
        await validateOrReject(input);
        console.log(input.getInformation());
    } catch (errors) {
        console.log("Caught promise rejection (validation failed). Errors: ", errors)
    }
}

validateOrRejectExample(newBook)

validate
const p1 = new Product('A Book', 12.99);
console.log(p1);


// MANUALLY
const loadedProduct: Product[] = products.map(prod => {
  return new Product(prod.title, prod.price);
});

console.log(loadedProduct);


const loadedProducts: Product[] = plainToClass(Product, products);
for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

declare const GLOBAL: string;

console.log(GLOBAL);

console.log(accounting2);
console.log(employee1);
console.log(fiscalYear);

console.log(shuffle);
fetchEmployees(url);

