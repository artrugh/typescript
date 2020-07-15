interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

// type fetchHTTP = (url:string) => Promise<Array<Employee| string>>;

interface fetchRequest {
    (url: string): Promise<Array<Employee| string>>;
}
export const url: string = "http://dummy.restapiexample.com/api/v1/employees";
export const fetchEmployees: fetchRequest = async (url) => {
  try {
    const response = await fetch(url);
    console.log(response);

    const { data } = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    if (error) {
      return error.message;
    }
  }
};


const baseApi = "https://reqres.in/api/users?page=1";
const userApi = "https://reqres.in/api/user";

const fetchAllEmployees = async (url: string): Promise<Employee[]> => {
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};

const fetchEmployee = async (
  url: string,
  id: number
): Promise<Record<string, string>> => {
  const response = await fetch(`${url}/${id}`);
  const { data } = await response.json();
  return data;
};
const generateEmail = (name: string): string => {
  return `${name.split(" ").join(".")}@company.com`;
};

const runAsyncFunctions = async (): Promise<string[] | void> => {
  try {
    const employees = await fetchAllEmployees(baseApi);
    Promise.all(
      employees.map(async (user: Employee): Promise<string> => {
        const userName = await fetchEmployee(
          userApi,
          user.id
        );
        const emails = generateEmail(userName.name);
        return emails;
      })
    );
  } catch (error) {
    console.log(error);
  }
};
runAsyncFunctions();