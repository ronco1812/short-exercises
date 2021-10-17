import "./styles.css";
const mathFuncs = require("./helpers/math");
document.addEventListener("click", buttonHandler);
const resultArea = document.getElementById("result");
const memory = {};

function buttonHandler(event) {
  const value = event.target.value;
  if (!value || event.target.id === "result") return;
  if (value >= 0 && value <= 9) {
    resultArea.value += value;
  }
  if (value === "Del") {
    resultArea.value = "";
    memory.firstNumber= "";
    memory.action = "";
  }
  if (value === ".") {
    if (!resultArea.value) {
      resultArea.value = "0.";
    } else {
      if (resultArea.value.includes(".")) return;
      resultArea.value += ".";
    }
  }
  if (value === "X") {
    actionHandler(mathFuncs.multiply);
  }
  if (value === "/") {
    actionHandler(mathFuncs.divide);
  }
  if (value === "+") {
    actionHandler(mathFuncs.add);
  }
  if (value === "-") {
    actionHandler(mathFuncs.sub);
  }
  if (value === "=") {
    displayAns();
  }
}

function actionHandler(act) {
  if (!resultArea.value) return;
  if (memory.a) {
    const res = mathFuncs.equals(memory.a, resultArea.value, memory.action);
    memory.firstNumber= res;
  } else {
    memory.firstNumber= resultArea.value;
  }
  memory.action = act;
  resultArea.value = "";
}

function displayAns() {
  if (!memory.firstNumber|| !memory.action) return;
  const answer = mathFuncs.equals(memory.firstNumber, resultArea.value, memory.action);
  memory.firstNumber= answer;
  resultArea.value = answer;
}