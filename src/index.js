const { fizzBuzz } = require("./utils");

let numbers = Array.from(Array(101).keys()).slice(1);
let results = fizzBuzz(numbers);

if (results.length > 0) {
  let div = document.getElementById("numContainer");
  results.map((item) => {
    let span = document.createElement("span");
    span.innerText = item;
    div.append(span);
  });
}

