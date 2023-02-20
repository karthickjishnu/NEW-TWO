(function () {
  let calculator = document.getElementById("calculator");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.getElementById("equal");
  let cancel = document.getElementById("cancel");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      calculator.value += value;
    });
  });
  equal.addEventListener("click", function (e) {
    if (calculator.value === "") {
      calculator.value = "click";
    } else {
      let answer = eval(calculator.value);
      calculator.value = answer;
    }
  });
  cancel.addEventListener("click", function (e) {
    calculator.value = "";
  });
})();
