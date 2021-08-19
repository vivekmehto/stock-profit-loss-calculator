const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-stocks");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputDiv.style.color = "red";
    outputDiv.innerText = `The Loss is ${loss} and the Loss Percentage is ${lossPercentage}%`;
  } else if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputDiv.style.color = "green";
    outputDiv.innerText = `The Profit is ${profit} and the Profit Percentage is ${profitPercentage}%`;
  } else {
    outputDiv.style.color = "yellow";
    outputDiv.innerText = "No Pain No Gain";
  }
}

function stockHandler() {
  var ip = initialPrice.value;
  var qty = quantityOfStocks.value;
  var curr = currentPrice.value;

  calculateProfitAndLoss(ip, qty, curr);
}

checkButton.addEventListener("click", stockHandler);
