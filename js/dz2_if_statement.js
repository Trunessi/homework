//!                       1
// Ниже приведён объект 'bobsCar'
// Напишите конструкцию if таким образом
// Если свойство 'mileage' ровно 0 то выводится строка 'Bob owns Subaru Impreza and it is brand new!'
// Если свойство 'mileage' меньше 1000 то выводится строка 'Bob owns Subaru Impreza and it is almost new!'
// В остальных случаях выводится строка 'Bob owns Subaru Impreza and it is old!'
console.log("1 ---");

const bobsCar = {
  make: "Subaru",
  model: "Impreza",
  info: {
    color: "blue",
    mileage: 0,
  },
};

if (bobsCar.info.mileage === 0) {
    console.log("Bob owns Subaru Impreza and it is brand new!");
  // console.log(`Bib owns ${bobsCar.make} ${bobsCar.model} and it is brand new!`);
} else if (bobsCar.info.mileage < 1000) {
    console.log("Bob owns Subaru Impreza and it is almost new!");
  // console.log(`Bib owns ${bobsCar.make} ${bobsCar.model} and it is almost new!`)
} else {
    console.log("Bob owns Subaru Impreza and it is old!");
  // console.log(`Bib owns ${bobsCar.make} ${bobsCar.model} and it is old.`)
}

//!                       2
// Напишите функцию, которая будет принимать два параметра - 'x, y'
// проверит каждый из них
// Если какой-то из них отрицательный, заменит его на положительный и сложит их
// x = -2 y = -3 результат 5
console.log("2 ---");

function sumPositiveNumbers(x, y) {
  // if (x < 0) {
  //   x = x * -1;
  // }
  // if (y < 0) {
  //   y = y * -1;
  // }
  // let sum = x + y;
  // return sum;
  console.log(Math.abs(x) + Math.abs(y)) // 2 variant
}
console.log(sumPositiveNumbers(-2, -3));



//!                       3 --
// Ниже приведён объект 'registry' - запись о владении недвижимостью
// скопируйте объект и измените данные владельца
// данные нового владельца приведены в объекте 'newOwner'
console.log("3 ---");

const registry = {
  owner: {
    name: "Mary Gold",
    age: 45,
  },
  property: {
    type: "House",
    bedrooms: 4,
    address: {
      country: "England",
      city: "London",
      street: "Fulton rd.",
      houseNumber: 30,
    },
  },
};

const newOwner = {
  name: "Jack Smith",
  age: 50,
};

const registryNew = JSON.parse(JSON.stringify(registry));
registryNew.owner = newOwner;
console.log(registryNew);

//!                       4
// напишите программу которая выводит в консоль сумму всех
// четных чисел в массиве
console.log("4 ---");

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];
sumEvenNum = 0;

numsArray.forEach(number4 => {
  if (number4 % 2 === 0) {
    sumEvenNum = sumEvenNum + number4;
  }
})
console.log(sumEvenNum);

//!                       5
// Напишите программу которая проанализирует данный массив с объектами
// и добавит в новый массив только имена тех людей кому 18 и старше
console.log("5 ---");

const people = [
  {
    name: "Jack",
    age: 15,
  },
  {
    name: "Sarah",
    age: 21,
  },
  {
    name: "Bob",
    age: 54,
  },
  {
    name: "Mary",
    age: 12,
  },
  {
    name: "Simon",
    age: 18,
  },
  {
    name: "Jonhatan",
    age: 17,
  },
];
const adults = []; // const adults = new Array()
people.forEach((p) => {
  if (p.age >= 18) {
    adults.push(p.name);
  }
});
console.log(adults);

//!                       6
// напишите программу которая проанализирует данный массив и выведет в консоль самую длинную строку
console.log("6 ---");

const strings = ["Star", "Planet", "Comet", "Interstellar", "Space"];
let wordLength = 0;
let maxWord = "";

strings.forEach(word => {
  if (word.length > wordLength) {
    wordLength = word.length;
    maxWord = word;
  }
})

console.log(maxWord);

//!                       7
// Напишите программу которая проанализирует данный массив и найдёт в нем наибольшее число кратное трём
console.log("7 ---");
const numbers = [3, 15, 23, 56, 66, 71, 12, 90];

let maxNum = 0;

numbers.forEach(num => {
  if (num % 3 === 0 && num > maxNum) {
    maxNum = num;
  }
})

console.log(maxNum);
