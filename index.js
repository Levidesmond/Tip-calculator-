//grab the necessary html contents and store them in the following variables
const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

// create a function that calculates the tips
// by using the .value method to collect the bill and tip input
function calcululateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.textContent = `total amount is = ${totalValue.toFixed(2)}`;
}
// the .tofixed(2) is used to round off the number after the decimal point to 2

btnEl.addEventListener("click", calcululateTotal);
