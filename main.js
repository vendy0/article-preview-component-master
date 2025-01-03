let button = document.querySelector("button");

function disparaitre() {
  if (button.style.display == "inline" || button.style.display == "block") {
    button.style.display = "none";
  } else {
    button.style.display = "inline";
  }
}

// setInterval(disparaitre, 500);

// q: how can I copy a function?
// a: use the function name without the parentheses

// q: how can I stop the setInterval?
// a: use the clearInterval() function

// How can I put the setInterval in a variable?
// a: use the setInterval() function

// how do we use the set interval function ?
// a: setInterval(function, time)
