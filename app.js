const input = document.querySelector(".input b");
const buttons = document.querySelectorAll("button");

let add = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      add = eval(add);
      input.textContent = add;
    } else if (e.target.textContent === "DEL") {
      add = add.slice(0, add.length - 1);
      input.textContent = add;
    } else if (e.target.textContent === "AC") {
      add = "";
      input.textContent = add;
    }
    else if(e.target.textContent === "^"){
      add += "**"
      input.textContent = add
    }
    else {
      add += e.target.textContent;
      input.textContent = add;
    }
  });
});
