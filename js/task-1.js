/* З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
 елемента(тегу < h2 >) 
і кількість елементів у категорії(усіх < li >, вкладених у нього). */

const categoriesEl = document.querySelector("#categories");

const categoriesItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItemEl.length);
categoriesItemEl.forEach((item) => {
  const categoriesTitleEl = item.querySelector(".title").textContent;
  console.log("Category:", categoriesTitleEl);
  const categoriesElementsEl = item.querySelectorAll(".item-categories");
  console.log("Elements:", categoriesElementsEl.length);
});
