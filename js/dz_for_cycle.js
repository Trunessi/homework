//!                         1
// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл

console.log("------TASK 1:");

const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  } else if (numbers[i] === 23) {
    break;
  }
}

//!                         2
// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/

console.log("------TASK 2:");

const people = [
  { name: "Jack", surname: "Smith" },
  { name: "Bob", surname: "Summers" },
  { name: "Sarah", surname: "Gold" },
  { name: "Susan", surname: "Vega" },
  { name: "Mary", surname: "Roberts" },
];

console.log("<ul>");
for (let i = 0; i < people.length; i++) {
  console.log(
    `       <li><h1>Hello ${people[i].name} ${people[i].surname}</h1></li>`
  );
}
console.log("</ul>");

//!                         3
// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

console.log("------TASK 3:");

function evenOdd(start, end) {
  if (start >= end) {
    console.log("End number is less than Start number or the same.");
    return;
  }
  if (isNaN(start) || isNaN(end)) {
    console.log("The values entered are not numbers");
    return;
  }

  for (let i = start; i < end + 1; i++) {
    if (i === 0) {
      console.log(`${i} is null`);
    } else if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}
evenOdd("o", 5);

//!                         4
// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

console.log("------TASK 4:");

function biggestNum(a, b, c) {
  let bNum = a;
  if (a > b) {
    if (a > c) {
      bNum = a;
    } else bNum = c;
  } else if (b > c) {
    bNum = b;
  } else bNum = c;
  console.log(bNum);
}
biggestNum(-79, 99, 12);

//!                         5
// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка

console.log("------TASK 5:");

// function fizzBuzz(x) {
//   if (x > 0 && x < 101) {
//     if (x % 3 === 0) {
//       if (x % 5 === 0) {
//         console.log(x, " FIZZBUZZ");
//       } else console.log(x, " FIZZ");
//     } else if (x % 5 === 0) {
//       console.log(x, " BUZZ");
//     }
//   } else console.log(x, " is incorrect number");
// }
// fizzBuzz(120);

function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log(i, " FIZZBUZZ");
      } else console.log(i, " FIZZ");
    } else if (i % 5 === 0) {
      console.log(i, " BUZZ");
    } else console.log(i);
  }
}
fizzBuzz();
