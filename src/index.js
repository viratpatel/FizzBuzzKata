const { fizzBuzz } = require("./utils");

let numbers = Array.from(Array(101).keys()).slice(1);
let results = fizzBuzz(numbers);

if (results.length > 0) {
  let container = document.getElementById("container");
  results.map((item) => {
    let text = document.createElement("span");
    text.innerText = item;
    container.append(text);
  });
}

