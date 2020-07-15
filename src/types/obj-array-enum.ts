const person1: {
  name: string;
  age: number;
  hobbies: string[];
  taste: (string | number)[];
  role: [number, string];
} = {
  name: "Max",
  age: 30,
  hobbies: ["Sport", "Education"],
  taste: [1, "sugar"],
  role: [1, "auth"],
};

for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
  }

// only push is allowed using tuples 
person1.role.push("user");
// error
person1.role[1] = "admin";

enum Role {
  // change the starting default value
  ADMIN = 5,
  READ_ONLY,
  AuthenticatorResponse,
}

const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sport", "Education"],
  taste: [1, "sugar"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log(person);
  console.log("great");
}

// is not coping the obj
// just storing the position of it in the script
// so when a value in newPerson is changed, the original obj is changed as well
const newPerson = person;
newPerson.name = "Nik";

const copiedPerson = { ...person };
copiedPerson.name = "John";

// rename the variable
const { age: newAge } = person;

console.log(person);
console.log(newPerson);
console.log(copiedPerson);
console.log(newAge);
