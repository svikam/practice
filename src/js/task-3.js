/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? 70 === 01:10
 */
// const globalMinutes = 70;
// const hours = String(Math.floor(globalMinutes / 60)).padStart(2, "0");
// const minutes = String(globalMinutes % 60).padStart(2, "0") ;
// console.log(minutes);

// console.log(hours);

// console.log(`${hours}:${minutes}`);

function convertTime(globalMinutes) {
    const hours = String(Math.floor(globalMinutes / 60)).padStart(2, "0");
    const minutes = String(globalMinutes % 60).padStart(2, "0");
    return `${hours}:${minutes}`;
}

console.log(convertTime(90));
console.log(convertTime(75));
console.log(convertTime(85));
console.log(convertTime(80));
console.log(convertTime(150));

//Метод padStart() в JavaScript предназначен для добавления символов в начало строки, чтобы достичь определенной длины. 
// let num = 42;
// console.log(num.toString().padStart(4, '0')); // "0042"

// let fileName = "image.jpg";
// console.log(fileName.padStart(20, '-')); // "----------------image.jpg"
// В первом примере число 42 преобразуется в строку, а затем дополняется нулями до 4 символов. 
// Во втором примере строка "image.jpg" дополняется дефисами до 20 символов.