let $ = document;

let firstValue = $.querySelector(".C");
let secondValue = $.querySelector(".F");
let converter = $.querySelector(".converter-input");
let result = $.querySelector(".result");
let convertBtn = $.querySelector(".convertBtn");
let resetBtn = $.querySelector(".resetBtn");
let changeBtn = $.querySelector(".changeBtn");

function convert() {
  if (converter.value === "") {
    result.innerHTML = "Please insert value";
    result.style.color = "red";
  } else if (firstValue.innerHTML === "°C") {
    let resultValue = converter.value * 1.8 + 32;
    result.innerHTML = resultValue;
    result.style.color = "green";
  } else {
    let resultValue = (converter.value - 32) / 1.8;
    result.innerHTML = resultValue;
    result.style.color = "green";
  }
}

function reset() {
  result.innerHTML = "";
  converter.value = "";
}

function swap() {
  result.innerHTML = "";
  converter.value = "";
  if (firstValue.innerHTML === "°C") {
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    converter.setAttribute("placeholder", "°F");
    $.title = "F° To C° Converter";
  } else {
    firstValue.innerHTML = "°C";
    secondValue.innerHTML = "°F";
    converter.setAttribute("placeholder", "°C");
    $.title = "C° To F° Converter";
  }
}

convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", swap);
