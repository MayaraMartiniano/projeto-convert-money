const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectConverter = document.querySelector(".select-converter")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.0
    const biticoinToday = 5.0


if(currencySelect.value == "dolar") {
    
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

}

if(currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
        }).format(inputCurrencyValue/euroToday)

}

if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: 'currency',
        currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
}

if (currencySelect.value =="bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
    style:"currency",
    currency:"BTC" 
}).format(inputCurrencyValue / biticoinToday)

}



currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)


if (selectConverter.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
}
    
    
}

function changeConvert(){
    const currencyConvert = document.getElementById ("currency-to-convert")
    const currencyImag = document.querySelector (".currency-imag")

    if (selectConverter.value == "dolar") {
        currencyConvert.innerHTML = "Dólar Americano"
        currencyImag.src = "./assets/estados-unidos (1) 1 (1).png"

    } 

}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector (".currency-img")
    


    if ( currencySelect.value == "dolar" ) {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos (1) 1 (1).png"
                   
    }

    if ( currencySelect.value == "euro" ) {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if ( currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if ( currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }


    convertValues ()
    
}

selectConverter.addEventListener("change", changeConvert )
currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)