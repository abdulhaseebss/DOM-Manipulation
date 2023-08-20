// Q=1

// const nameForm = document.getElementById("nameForm");
// const emailForm = document.getElementById("emailForm");

// nameForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const nameValue = nameForm.elements["name"].value;
//     console.log(`Name: ${nameValue}`);
// });

// emailForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const emailValue = emailForm.elements["email"].value;
//     console.log(`Email: ${emailValue}`);
// });

// Q=2

function calculate() {
    var num1 = +(document.getElementById("num1").value);
    var num2 = +(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var resultElement = document.getElementById("result");

    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }

    resultElement.textContent = "Result: " + result;
}


// Q=3

// function displaySeason() {
//   var monthSelect = document.getElementById("monthSelect");
//   var selectedMonth = monthSelect.value;
//   var seasonDisplay = document.getElementById("seasonDisplay");

//   switch (selectedMonth) {
//     case "December":
//     case "January":
//     case "February":
//       seasonDisplay.textContent = "Winter";
//       break;
//     case "March":
//     case "April":
//     case "May":
//       seasonDisplay.textContent = "Spring";
//       break;
//     case "June":
//     case "July":
//     case "August":
//       seasonDisplay.textContent = "Summer";
//       break;
//     case "September":
//     case "October":
//     case "November":
//       seasonDisplay.textContent = "Fall";
//       break;
//     default:
//       seasonDisplay.textContent = "";
//   }
// }
