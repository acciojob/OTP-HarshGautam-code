//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// focus first box on load
codes[0].focus();

codes.forEach((input, index) => {

  // typing forward
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, ""); // allow digits only

    if (input.value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  // backspace behavior
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        codes[index - 1].focus();
      } else {
        input.value = "";
      }
    }
  });

});