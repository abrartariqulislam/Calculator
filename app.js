const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let add = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      add = eval(add);
      input.value = add;
    } else if (e.target.textContent === "DEL") {
      add = add.slice(0, add.length - 1);
      input.value = add;
    } else if (e.target.textContent === "AC") {
      add = "";
      input.value = add;
    }else {
      add += e.target.textContent;
      input.value = add;
    }
  });
});
