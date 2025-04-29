const numbers = [1, 2, 3];
numbers[1] = 10;
console.log("1:", numbers);

const strings = ["one", "two", "three"];
strings.push("four");
console.log("2:", strings);

const numsForSum = [5, 10, 15];
const sum = numsForSum.reduce((acc, curr) => acc + curr, 0);
console.log("3: Сума =", sum);

const nums5 = [1, 2, 3, 4, 5];
console.log("4:");
for (let i = 0; i < nums5.length; i++) {
  console.log(nums5[i]);
}

const strArray = ["timur", "frontend", "goiteens", "js", "script"];
console.log("5:");
for (const str of strArray) {
  if (str.length > 5) {
    console.log(str);
  }
}

const nums10 = [3, 17, 8, 22, 1, 14, 9, 33, 4, 19];
const max = Math.max(...nums10);
console.log("6: Максимальне число =", max);

console.log("7: Парні числа:");
for (const n of nums10) {
  if (n % 2 === 0) {
    console.log(n);
  }
}
