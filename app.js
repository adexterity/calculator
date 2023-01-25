const buttons = document.querySelectorAll(".calculator input");

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  if (i == 1) {
    buttons[i].addEventListener("click", () => (buttons[0].value = ""));
  } else if (i == 2) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value = buttons[0].value.slice(0, -1))
    );
  } else if (i == 3) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 4) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 5) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 6) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 7) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 8) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 9) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 10) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 11) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 12) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 13) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 14) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 15) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 16) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 17) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 18) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value += buttons[i].value)
    );
  } else if (i == 19) {
    buttons[i].addEventListener(
      "click",
      () => (buttons[0].value = eval(buttons[0].value))
    );
  }
}
