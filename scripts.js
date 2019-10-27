// Calculator program to determine Tip value by specific percentages.

function FindTip(num1, num2) {
  return num1 * num2;
}
function ConvertPercent(num1) {
  if (num1 == "fifteen") {
    return 0.15;
  } else if (num1 == "twenty") {
    return 0.2;
  } else if (num1 == "twenty-five") {
    return 0.25;
  }
}
function FindTotal(num1, num2) {
  return num1 + num2;
}
const form = document.querySelector("form");
const bill = document.querySelector("#bill");
const percentage = document.querySelector("#percentage");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");

form.addEventListener("submit", function event() {
  event.preventDefault();
  console.log(bill.value, percentage.value, tip.value, total.value);
  tip.textContent = FindTip(bill.value, ConvertPercent(percentage.value));
  total.textContent = FindTotal(
    bill.value,
    FindTip(bill.value, ConvertPercent(percentage.value))
  );
});
