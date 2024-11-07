const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculate);

function calculate() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operation = document.getElementById("operation").value;
  const resultDiv = document.getElementById("result");

  if (num1 === "" || num2 === "") {
    resultDiv.innerText = "Please enter both numbers.";
    resultDiv.classList.add("error");
    return;
  }
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    resultDiv.innerText = "Please enter valid numbers.";
    resultDiv.classList.add("error");
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      if (number2 === 0) {
        resultDiv.innerText = "Cannot divide by zero.";
        resultDiv.classList.add("error");
        return;
      }
      result = number1 / number2;
      break;
    default:
      result = "Invalid operation";
  }

  resultDiv.innerText = "Result: " + result;
  resultDiv.classList.remove("error");
}
