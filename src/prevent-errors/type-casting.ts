// const userInputEl = <HTMLInputElement> document.getElementById("user-input");
// const userInputEl = document.getElementById("user-input")! as HTMLInputElement;
const userInputEl = document.getElementById("user-input");

if (userInputEl) {
  (userInputEl as HTMLInputElement).value = "text";
}
