// Control Flow Structures
// 1. Conditional Statements
// Conditional: if, else if, else statement
// () - Conditional Block
// {} - Code Block

let temperature = 31;
if (temperature < 0) {
  console.log("It's freezing.");
  console.log("Bring a jacket.");
} else if (temperature >= 0 && temperature < 20) {
  // Range: 0 - 20
  console.log("It's cool outside.");
  console.log("Let's go to the park.");
} else if (temperature >= 20 && temperature <= 29) {
    // Range: 20 - 29
    console.log("It's warm outside.");
    console.log("Let's get some ice cream.");
  } else {
    console.log("It's hot outside.");
  }

  // Conditional: switch-case statement
let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the weekdays.");
    break;
  default:
    console.log("It's just a normal day.");
}

// 2. Looping Statements
// For Loop
// 1. Variable Initialization
// 2. Condition Expression
// 3. Increment or Decrement
for (let i = 1; i <=5 ; i++) {
  console.log("For Loop Count:", i);
}

// While Loop
let count = 1;
while (count <= 3) {
  count++;
  console.log("While Loop Count:", count);
}

