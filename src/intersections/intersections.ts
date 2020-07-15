
const fetchedUserData = {
  id: "hjkfasd",
  name: "David Geta",
  job: { title: "CEO" },
};

const title = fetchedUserData?.job?.title;

const userInputIntersections = "";
console.log(userInputIntersections === undefined); // false
console.log(userInputIntersections === null); // false

// const storedInput = userInputIntersections || "DEFAULT";
const storedInput = userInputIntersections ?? "DEFAULT"; // "" stored

console.log(storedInput);


interface Admin {
  name: string;
  priviliges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

// this is an intersection
interface ElevatedEmployee extends Admin, Employee {}
// this is an intersection
// type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "John",
  priviliges: ["server"],
  startDate: new Date(),
};
