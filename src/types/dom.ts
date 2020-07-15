// const button = document.querySelector(".btn");
console.log("Access to the dom");

const button = document.querySelector(".btn");

function clickHandler(msg: string) {
  console.log("clicked" + msg);
}
if (button) {
  button.addEventListener("click", clickHandler.bind(null, " Hi"))
}
