import cipher from "./cipher.js";

const textArea = document.getElementById("textArea");
const divText = document.getElementById("sale");

textArea.addEventListener("keyup", () => {
  divText.textContent = textArea.value;
});

console.log(cipher);
