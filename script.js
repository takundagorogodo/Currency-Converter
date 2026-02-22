const currencyFirstEl = document.getElementById("Currency-first");
const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("Currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
  fetch(`https://v6.exchangerate-api.com/v6/d3cca33611070fa0d787479c/latest/${currencyFirstEl.value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];

      exchangeRateEl.innerHTML =
        `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

      worthSecondEl.value =
        (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);