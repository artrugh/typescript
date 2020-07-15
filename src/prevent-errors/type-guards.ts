// type EmployeeGuard = {
//   name: string;
//   priviliges: string[];
// };

// type AdminGuard = {
//   name: string;
//   startDate: Date;
// };

// // intersection
// type ElevatedEmployeeGuard = EmployeeGuard & AdminGuard;

// const e: ElevatedEmployeeGuard = {
//   name: "John",
//   priviliges: ["server"],
//   startDate: new Date(),
// };

// intersection
type UnknownEmployee = Employee | Admin;

function printEmployee(emp: UnknownEmployee): void {
  console.log(emp.name);
  // type guard
  if ("priviliges" in emp) {
    console.log(emp.priviliges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

printEmployee(e1);

class Car {
  drive() {
    console.log("Drive a car");
  }
}

class Truck {
  drive() {
    console.log("Drive a truck");
  }

  loadCargo(amount: number) {
    console.log("loading" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(3000);
  }
}

useVehicle(v1);
useVehicle(v2);
