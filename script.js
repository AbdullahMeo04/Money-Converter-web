var rates = {EUR: 1, USD: 1.08, GBP: 0.86, JPY: 162.5};

var amountInput = document.getElementById("amount");
var rangeSlider = document.getElementById("Price");
var fromCurrency = document.getElementById("fromcurrency");
var toCurrency = document.getElementById("tocurrency");
var convertBtn = document.getElementById("convertbtn");
var resultText = document.getElementById("result");

rangeSlider.addEventListener("input", function () {
    amountInput.value = rangeSlider.value;
});

amountInput.addEventListener("input", function () {
    rangeSlider.value = amountInput.value;
});

function convertCurrency() {
    var amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultText.textContent = "Please enter a positive number.";
        return;
    }

    var amountInEUR = amount / rates[fromCurrency.value];
    var convertedAmount = amountInEUR * rates[toCurrency.value];

    resultText.textContent =
        "Result: " + convertedAmount.toFixed(2) + " " + toCurrency.value;
}

convertBtn.addEventListener("click", convertCurrency);

amountInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        convertCurrency();
    }
});
