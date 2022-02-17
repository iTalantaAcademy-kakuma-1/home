function myFunction() {
  let person = prompt("Please enter your name", " ");
  if (person != null) {
    document.getElementById().innerHTML =
    "Hello " + person + "! How are you today?";
  }
}

// Alert

let m = 12
let y = 24

alert(m + y)

// confirm


let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return confirm(a * b);           // Function returns the product of a and b
}