const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["violet", "pink", "red", "skyblue", "grey", "blue"];

button.addEventListener("click", fn1);
function fn1() {
  const index = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[index];
}
