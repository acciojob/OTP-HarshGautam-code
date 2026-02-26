//your JS code here. If required.

const inputs = document.querySelectorAll(".code");

// focus first input
inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener("keydown", (e) => {

    // allow only digits + backspace + tab
    if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
      return;
    }

    // BACKSPACE behavior
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].value = "";
        inputs[index - 1].focus();
        e.preventDefault();
      }
      return;
    }

    // typing forward
    input.value = "";
    setTimeout(() => {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }, 10);
  });

});