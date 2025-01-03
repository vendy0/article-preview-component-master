let button = document.querySelector("button");
let svg = document.querySelectorAll("path");
let section = document.querySelector(".share-container");
p = "";

button.addEventListener("mouseover", () => {
  // for (x = 0; x < svg.length; x++) {

  button.style.backgroundColor = "hsl(214, 17%, 51%)";
  for (x = 0; x < svg.length; x++) {
    svg[x].style.fill = "#FFF";
  }
  button.style.color = "hsl(210, 46%, 95%)";
  section.style.backgroundColor = "hsl(214, 17%, 51%)";
});

button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "hsl(210, 46%, 95%)";
  for (index = 0; index < svg.length; index++) {
    svg[index].style.fill = "#6e8098";
  }
  button.style.color = "hsl(214, 17%, 51%)";
});

// function disparaitre() {
//   if (button.style.display == "inline" || button.style.display == "block") {
//     button.style.display = "none";
//   } else {
//     button.style.display = "inline";
//   }
// }

// setInterval(disparaitre, 500);

// q: how can I copy a function?
// a: use the function name without the parentheses

// q: how can I stop the setInterval?
// a: use the clearInterval() function

// How can I put the setInterval in a variable?
// a: use the setInterval() function

// how do we use the set interval function ?
// a: setInterval(function, time)
