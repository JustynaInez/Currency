console.log("Cześć wszystkim! :)");

const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector(".js-result");
const formElement = document.querySelector(".js-form")
const currencyElement = document.querySelector(".js-currency");
const currencyElement1 = document.querySelector(".js-currency1");

let FinalResult = (currency, currency1, amount) =>{
    const euroRate = 4.44;
    const usdRate = 3.91;
    const gbdRate = 4.94;
    
switch (currency) {
    case "pln":
        plnValue = +amount;
        break;
    case "usd":
        plnValue = amount * usdRate;
        break;
    case "euro":
        plnValue = amount * euroRate;
        break;
    case "gbd":
        plnValue = amount * gbdRate;
        break;
}

switch (currency1) {
    case "pln":
        result = plnValue;
        break;
    case "usd":
        result = plnValue / usdRate;
        break;
    case "euro":
        result = plnValue / euroRate;
        break;
    case "gbd":
        result = plnValue / gbdRate;
        break;
}
}
formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    const amount = amountElement.value;
    const currency = currencyElement.value;
    const currency1 = currencyElement1.value;
    
    const plnValue = FinalResult (currency1, currency, amount);

   
    resultElement.value = result.toFixed(2);
});