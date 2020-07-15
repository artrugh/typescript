// an abstract class CAN NOT be instantiated
abstract class Department {
  // check the shortcut method, setting the properties directly in the constructor
  //   public name: string;
  //   private employees: string[] = [];

  // this is a static value which has access from everywhere

  static fiscalYear = 2020;
  constructor(
    public readonly id: string,
    public readonly name: string,
    // if private the addEmployee method in accountind doesn't work
    protected employees: string[]
  ) {
    //   this.name = name;
    this.employees = [];
  }
  // abstract allows methods to be overwritten in each instance
  // it is a shared overwritten method
  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT", []);
    this.admins = admins;
  }

  describe() {
    console.log("ITDepartment");
  }

  addAdmin(admin: string) {
    if (admin === "Max") {
      return;
    } else {
      this.admins.push(admin);
    }
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees);
  }
}

// THIS IS A SINGLETON CLASS
// YOU CAN ONLY HAVE ONE INSTANCE OF IT
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // if you want that a class can also when initiated only once
  // you should private the constructor and set a method
  // which allows to intiate the class from inside
  // private contructor, denied to initiate the class from outside
  // NOT ex const accounting = new AccountingDepartment(...)

  private constructor(id: string, public reports: string[]) {
    // id, name, employees from Department
    super(id, "Accounting", []);
    this.lastReport = reports[0];
  }

  // method to get access to the constructor from inside
  // basically it is a method which return the class itself
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("id2", []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set addRecentReport(value: string) {
    if (!value) {
      throw new Error("No value found");
    }
    this.addReport(value);
  }

  describe() {
    console.log("Accounting Department");
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReport() {
    console.log(this.reports);
  }
}

// you can not create an instance of an abstract
// const mainDepartment = new Department;

// STATICS
export const employee1 = Department.createEmployee("John");
export const fiscalYear = Department.fiscalYear;
// console.log(fiscalYear);

// -- // -- //

const IT = new ITDepartment("id1", ["Peter"]);

IT.addAdmin("Max");
IT.addEmployee("Max");
IT.addEmployee("Tiny");
IT.printEmployeeInfo();
IT.describe();

// print an error
// console.log(accounting.mostRecentReport);

// accounting.name = ('Selling')

// const accounting = new AccountingDepartment("id2", []);
// using private static instance
const accounting = AccountingDepartment.getInstance();

// private employees prevent that
// accounting.employees.push('Beto')

accounting.addRecentReport = "Third Report";
accounting.addReport("First Report");
accounting.addReport("Second Report");
accounting.printReport();
accounting.describe();

// accounting2 it's exacty the same as accountDepartment
// because it is a singleton class and can also been initialice once!
export const accounting2 = AccountingDepartment.getInstance();
