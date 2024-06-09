/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

const answer = prompt("Яка офіційна назва JavaScript?").trim();
console.log(answer);
const RIGHT_ANSWER = "ECMAScript";
answer === RIGHT_ANSWER ? alert("Вірно!") :
    alert("Не знаєте? ECMAScript!");

//Функция prompt() в JavaScript - это встроенная функция, которая позволяет получить ввод пользователя в виде текстовой строки. Она отображает диалоговое окно с полем ввода, в котором пользователь может ввести информацию.
// let userName = prompt("Введите ваше имя:");
// console.log("Привет, " + userName + "!");