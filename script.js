const button = document.querySelector("#btn");
const input = document.querySelector("#text");
const square = document.querySelector("#square");
const eBtn = document.querySelector("#e_btn");
const rangeInput = document.querySelector("#range");
const rangeSpan = document.querySelector("#range-span");
const circle = document.querySelector("#circle");

console.log(button);
console.log(input);

//Повесить на кнопку обработчик события click

button.addEventListener("click", function () {
  square.style.backgroundColor = input.value;
  //для очистки input
  input.value = "";
});

//Дать кнопке style (display: none) если по клику на кнопку то:
eBtn.addEventListener("click", function () {
  eBtn.style.display = "none";
});
//если просто убрать с экрана то eBtn.style.display = "none"

//Повестить на input обработчик события для увеличения ширины и высоты кружка

rangeInput.addEventListener("input", function () {
  const inputValue = rangeInput.value;
  rangeSpan.textContent = inputValue;

  circle.style.cssText = `width: ${inputValue}%; height: ${inputValue}%`;
  //Проверяем что ширина и высота в процентах
  console.log(circle.style.width);
  console.log(circle.style.height);
});
