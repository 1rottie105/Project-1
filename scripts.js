// Calculator program to determine Tip value by specific percentages.

function FindTip(num1, num2) {
  let tip = num1 * num2;
  return tip;
}
function ConvertPercent(num1)
{
  let percent = 0;
  if(num1 = 'fifteen')
  {
    percent = 0.15;
  }
  else if(num1 = 'twenty')
  {
    percent = 0.2;
  }
  else if(num1 = 'twenty-five')
  {
    percent = 0.25;
  }
}
function FindTotal(num1, num2)
{
  let total = num1 + num2;
  return total;
}
const form = document.querySelector("form");
const bill = document.querySelector("#bill");
const percent = document.querySelector("#percentage");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");

form.addEventListener("submit", function event){
event.preventDefault();
console.log(bill.value, percent.value, tip.value, total.value)
tip.textContent = FindTip(bill,ConvertPercent(percent))
total.textContent = FindTotal(bill, FindTip(bill, ConvertPercent(percent)))
}
