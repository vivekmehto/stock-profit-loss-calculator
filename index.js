const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-stocks");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    console.log("loss");
    var loss = (initial - current) * quantity;
    var lossPercentage = ((initial - current) * 100) / initial;

    outputDiv.style.color = "red";
    outputDiv.innerText = `The Loss is ${loss} and the Loss Percentage is ${lossPercentage}%`;
  } else if (initial < current) {
    console.log("profit");
    var profit = (current - initial) * quantity;
    var profitPercentage = ((current - initial) * 100) / initial;

    outputDiv.style.color = "green";
    outputDiv.innerText = `The Profit is ${profit} and the Profit Percentage is ${profitPercentage}%`;
  } else {
    console.log("equal");
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
