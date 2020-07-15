// what is the diff between unknow and any:
// any can be any can of type, which means that it doesn't have an specific type
// although, unknown means it has an specific type but it is known

let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// when we have a return which crash our scrypt be use never;
// a ex is throwing an generateError
// or infinite loop

function generateError(msg: string, code: number): never {
  throw { msg: msg, code: code };
}

// generateError("Something went wrong", 500);
