{
console.log("Cześć wszystkim! :)");



const FinalResult = (currency, currency1, amount, plnValue) => {
    const euroRate = 4.44;
    const usdRate = 3.91;
    const gbdRate = 4.94;

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
            return plnValue;
        case "usd":
            return plnValue * usdRate;
        case "euro":
            return plnValue * euroRate;
        case "gbd":
            return plnValue * gbdRate;
    }
   
}

const resultInTheEnd = (result) => {
  
    const resultElement = document.querySelector(".js-result");
    resultElement.value = result.toFixed(2)
}

const onForm = (event) => {
    event.preventDefault()

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const currencyElement1 = document.querySelector(".js-currency1");

    const amount = amountElement.value;
    const currency = currencyElement.value;
    const currency1 = currencyElement1.value;

    let result = FinalResult(currency, currency1, amount);

    resultInTheEnd(result, currency, currency1, amount);
};

const init = () => {

    const formElement = document.querySelector(".js-form")

    formElement.addEventListener("submit", onForm);

}

init();
}