const numbers = [1, 2, 3];
numbers[1] = 10;
console.log("Змінений масив чисел:", numbers);

const strings = ["one", "two", "three"];
strings.push("four");
console.log("Масив рядків після додавання:", strings);

const numsForSum = [5, 10, 15];
const sum = numsForSum.reduce((acc, curr) => acc + curr, 0);
console.log("Сума чисел у масиві:", sum);

const nums5 = [1, 2, 3, 4, 5];
console.log("Всі елементи масиву з 5 чисел:");
for (let i = 0; i < nums5.length; i++) {
  console.log(nums5[i]);
}

const strArray = ["timur", "frontend", "goiteens", "js", "script"];
console.log("Рядки довші за 5 символів:");
for (let i = 0; i < strArray.length; i++) {
  if (strArray[i].length > 5) {
    console.log(strArray[i]);
  }
}

const nums10 = [3, 17, 8, 22, 1, 14, 9, 33, 4, 19];
const max = Math.max(...nums10);
console.log("Максимальне число в масиві:", max);

console.log("Парні числа з масиву:");
for (let i = 0; i < nums10.length; i++) {
  if (nums10[i] % 2 === 0) {
    console.log(nums10[i]);
  }
}
