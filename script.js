// Створення масиву
let arr = [];
let arrLength = parseInt(prompt("Введіть довжину масиву:"));

// Заповнення масиву елементами, введеними користувачем
for (let i = 0; i < arrLength; i++) {
  let element = prompt("Введіть елемент масиву:");
  arr.push(element);
}

// Виведення вмісту масиву на сторінку
document.write("Початковий масив: " + arr.join(", ") + "<br>");

// Сортування масиву за зростанням
arr.sort();
document.write("Масив після сортування: " + arr.join(", ") + "<br>");

// Видалення елементів з масиву з 2 по 4 (включно!)
arr.splice(1, 4);
document.write("Масив після видалення елементів: " + arr.join(", ") + "<br>");
