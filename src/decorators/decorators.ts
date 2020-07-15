// // VALIDATOR

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function validationHelper(
  target: any,
  propName: string,
  validationToAdd: string
): void {
  const constructorName = target.constructor.name;
  const validatorsList = registeredValidators[constructorName];
  let validators;
  if (validatorsList && validatorsList[propName]) {
    validators = [...validatorsList[propName], validationToAdd];
  } else {
    validators = [validationToAdd];
  }
  registeredValidators[constructorName] = {
    ...validatorsList,
    [propName]: validators,
  };
}

function Required(target: any, propName: string) {
  validationHelper(target, propName, "required");
}

function PositiveNumber(target: any, propName: string) {
  validationHelper(target, propName, "positive");
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      console.log(validator);

      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  _price: number;
  constructor(title: string, _price: number) {
    (this.title = title), (this._price = _price);
  }
}

const courseForm = document.querySelector("form")!;

if (courseForm) {
  courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = (document.querySelector("#title") as HTMLInputElement).value;
    const price = +(document.querySelector("#price") as HTMLInputElement).value;

    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input!");
        return;
    }
  });
}
