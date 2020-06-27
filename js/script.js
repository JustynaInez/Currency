console.log("Cześć wszystkim! :)");



let FinalResult = (currency, currency1, amount) =>{
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
        return plnValue *  usdRate;
    case "euro":
        return plnValue * euroRate;
    case "gbd":
        return plnValue * gbdRate;
}
}

let onForm = (event) => {
    event.preventDefault()
    
const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector(".js-result");
const currencyElement = document.querySelector(".js-currency");
const currencyElement1 = document.querySelector(".js-currency1");

    const amount = amountElement.value;
    const currency = currencyElement.value;
    const currency1 = currencyElement1.value;
    
    const plnValue = FinalResult (currency, currency1, amount);

   
    resultElement.value = plnValue.toFixed(2);
};

let init = () =>{

const formElement = document.querySelector(".js-form")

formElement.addEventListener("submit", onForm); 

}

init ();