console.log("Cześć wszystkim! :)");

let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form")
let currencyElement = document.querySelector(".js-currency");
let currencyElement1 = document.querySelector(".js-currency1");



formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let currency1 = currencyElement1.value;
    let euroRate = 4.44;
    let usdRate = 3.91;
    let gbdRate = 4.94;
    let plnValue;

    switch (currency) {
        case "pln":
            plnValue = +amount;
            break;
        case "usd":
            plnValue = amount / usdRate;
            break;
        case "euro":
            plnValue = amount / euroRate;
            break;
        case "gbd":
            plnValue = amount / gbdRate;
            break;
    }

    switch (currency1) {
        case "pln":
            result = plnValue;
            break;
        case "usd":
            result = plnValue * usdRate;
            break;
        case "euro":
            result = plnValue * euroRate;
            break;
        case "gbd":
            result = plnValue * gbdRate;
            break;
    }
    resultElement.value = result.toFixed(2);
});