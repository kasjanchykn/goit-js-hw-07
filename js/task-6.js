/* Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
Є input, у який користувач вводить бажану кількість елементів.
 Після натискання на кнопку Create має рендеритися(додаватися в DOM) 
 колекція з відповідною кількістю елементів і очищатися значення в інпуті.
 При повторному натисканні на кнопку Create поверх старої колекції має 
 рендеритись нова.
 Після натискання на кнопку Destroy колекція елементів 
 має очищатися.
 Після натискання користувачем на кнопку Create треба провалідувати 
 значення в input, воно має бути в межах від 1 до 100 включно.Тільки
  якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  boxContainer.innerHTML = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.append(box);
    size += 10;
  }
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

function destroyBoxes() {
  boxContainer.innerHTML = "";
}
destroyButton.addEventListener("click", destroyBoxes);
