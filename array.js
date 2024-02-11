// const renkler = ["sarı", "mavi", "kırmızı"]

// console.log(renkler.length);

// // console.log(renkler.pop());
// // console.log(renkler);

// // console.log(renkler.push("yeşil"));
// // console.log(renkler);

// const yeniRenkler = ["turuncu", "siyah"]
// console.log(renkler.concat(yeniRenkler));
// const colors = renkler.concat(yeniRenkler)
// console.log(renkler);
// console.log(colors);

// // console.log(renkler.shift());
// // console.log(renkler);

// // console.log(renkler.unshift("beyaz"));
// // console.log(renkler)

// console.log(renkler[1]);
// renkler[0] = "mor"
// console.log(renkler);
// renkler[renkler.length] = "pembe"
// console.log(renkler);

// renkler[10] = "fuşya"
// console.log(renkler);
// renkler[4] = "turkuaz"

// let deger = renkler.indexOf(10)
// if (deger === -1) {

// console.log(false);  }
// else {console.log(true);}

// const firstNames = ["ali", "ayşe", "sude", "furkan", 0]

// console.log(firstNames.includes(firstNames.indexOf("ali")))
// firstNames.includes(firstNames.indexOf(3))

// if (renkler.indexOf("sarı") + 1) {
//     console.log(true);
// }
// else (console.log(false))

// let a = null
// console.log(Boolean(a) + 1);

// renkler.indexOf("sarı")

// // const products = ["Ps5", 300000, true, "Xbox", 300000, true, "NintendoSwitch", 15000, false,
// // "MacBook Pro", 100000, true, "AirPods", 70000, false, "iPhone 15", 500000, true,
// // "Rtx 4090", 90000, false, "Samsubg S24", 70000, false]

// // products.splice(3, 0, "Baldurs gate 3", 1000, true)
// // products.splice(6, 0, "Palworld", 1000, false)
// // products.splice(9, 0, "Skyrim", 300, true)
// // products.splice(9, 0, "Alan Wake 2", 1000, false)

// console.log(products);

// // products.splice(33, 3)
// // products.splice(24, 3)
// // products.splice(6, 3)
// // products.splice(18, 3)

// // console.log(products);

// // products.splice(3, 3, "Witcher 3", 1000, true)
// // products.splice(6, 3, "Hogwarts Legacy", 1000, true)
// // products.splice(9, 3, "CoD", 1000, true)
// // products.splice(12, 3, "GTA6", 3000, true)
// // console.log(products);

// // products.splice(3, 3, "Divinity 2", 1000, false, "Diablo 4", 1200, true)
// // products.splice(9, 3, "Corsair K70", 6000, true, "Razer deathadder", 1200, true)
// // products.splice(12, 3, "Total War", 1400, false, "Wow", 1200, true)
// // products.splice(15, 3, "Mass Effect", 1000, false, "Gamepower", 800, true)
// // console.log(products);

// // products.splice(products.indexOf("Ps5") + 1, 1, 35000)
// // products.splice(products.indexOf("AirPods") + 2, 1, true)
// // products.splice(products.indexOf("CoD") + 1, 1, 2000)
// // console.log(products);
// // products.splice(products.indexOf("Ps5") + 1, 1, 35000)

// // let i = 0
// // while (i < renkler.length) {
// //     let a = renkler[i]
// //     i++;
// //     if (a !== "sarı") {
// //     console.log(a + " yok");
// //       break
// //      }
// //     else {
// //     console.log(a + " var")};
// // }

// console.log(renkler);

const renkler = ["sarı", "mavi", "kırmızı"];
// let searchTerm = "mavi"
// for (i = 0; i < renkler.length; i++) {
//     if (renkler[i] === searchTerm) {
//         console.log(searchTerm + " var");
//         break;
//     }
//     else if (i === renkler.length -1 && renkler[i] !== searchTerm) {
//         console.log(searchTerm + " yok");
//     }
// }

// let searchTerm = prompt("En sevdiğiniz renk var mı acaba?").trim().toLocaleLowerCase();
// let result = null;
// for (let index = 0; index < renkler.length; index++) {
//     if (searchTerm === renkler[index].toLocaleLowerCase()) {
//         result = renkler[index].toLocaleLowerCase();
//     }
// }
// if (result !== null) {
//     console.log("Var: " + result);
// }
// else {console.log("Aradığınız sonuç null/undefined/NaN/0/")}

// function divide(num1, num2) {
//     return num1 / num2
// }

// // let num1 = 8
// // let num2 = 2

// let num3 = divide(8, "ege")
// console.log(num3);

// function multiply (num1, num2) {
//     return num1 * num2
// }

// let num4 = multiply(10, 20)
// console.log(num4);

// let add = function(num1, num2) {
//     return num1 + num2
// }

// let num5 = add("ege :", 14)
// console.log(num5);

let deduce = (num1, num2) => num1 - num2;
// let num6 = deduce(32, 11)
// console.log(num6);

// (function() {
//     let num1 = 3 * 4
//     console.log(num1);
// })();

// let greet = function() {
//     console.log("Selam");
// };

// greet();

function calculate(num1, num2, calculation) {
  return calculation(num1, num2);
}

let num = calculate(56, 2, deduce);
console.log(num);

// for (i = 0; i < renkler.length; i++) {
//     console.log("en sevdiğim renk: " + renkler[i]);
// }

// function sayma (num) {
//     console.log(num);
// let newNum = num + 1;
// if (newNum < 5) {
//     sayma(newNum)
// }
// }

// console.log(sayma(0));

// console.log(add(10, 4));

// function add (num1, num2) {
//     return num1 + num2;
// }

// console.log(add(1, 3));

// function deduce (num1, num2) {
//     return num1 - num2;
// }

// console.log(deduce(10, 5));

// // console.log(multiply(10, 7));

// const multiply = function (num1, num2) {
//     return num1 * num2;
// }

// console.log(multiply( 2, 67));

// const divide = function (num1, num2) {
//     return num1 / num2;
// }

// console.log(divide(10, 5));

// // greet()

// const greet = () => console.log("Selam");

// greet()

// const greetWithName = (name, surName) => console.log("Selam Sayın: " + name + surName);

// greetWithName("Onur Ege", " Erkek");

// const getFavColor = color => console.log("En sevdiğiniz renk: " + color);

// getFavColor("kırmızı")

const students = ["ege", "derin", "barkın", "mert"];
// const newStudents = []

function arrRev(arr) {
  const newArr = [];
  let newArrayI = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    newArr[newArrayI] = arr[i];
    newArrayI++;
  }
  return newArr;
}

const arrReverse = (arr) => {
  const newArr = [];
  let newArrayI = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    newArr[newArrayI] = arr[i];
    newArrayI++;
  }
  return newArr;
};

// console.log(arrRev(students));
// console.log(arrRev([1, 2, 3, 4, 5]));
// console.log(arrRev([true, undefined, NaN, "ege", 43]));
// console.log(arrRev([0, "", null, false]));
// console.log(arrRev(["java", 1, "css", 34, "html", 56]));

console.log(arrReverse([true, undefined, NaN, "ege", 43]));

function Phone(color, ram, storage) {
  this.color = color;
  this.ram = ram;
  this.storage = storage;
}

const iphone = new Phone("red", 12, 256);
console.log(iphone);

// iphone.model = "iphone15"
// console.log(iphone);

// // delete iphone.ram;
// // console.log(iphone);

// iphone.ram = 16
// console.log(iphone);

// console.log(Object.entries(iphone));
// console.log(Object.keys(iphone));
// console.log(Object.values(iphone));

// Object.freeze(iphone)

// Object.seal(iphone)

// iphone["model"] = "iphone15"
// console.log(iphone);

// delete iphone["storage"];
// console.log(iphone);

// iphone["ram"] = 16
// console.log(iphone);

// console.log(iphone.hasOwnProperty("color"));
// console.log(iphone.hasOwnProperty("height"));

// const student = {firstName: "Ege", age: 22}
// console.log(student);

// const newAge = "age"
// student[newAge] = 16
// console.log(student);

// const example2 = student.example;
// console.log(example2);

// student.newAge = 20;
// console.log(student);

// const student = { firstName: "ege", age: 22 };

// student.major = "translator";
// console.log(student);

// student.firstName = "onur ege";
// console.log(student);

// console.log(student["age"]);

// const propAge = "age";
// student[propAge] = 23;
// console.log(student["age"]);

// console.log(student.propAge);

// student.successRate = "too successfull"
// console.log(student);

// student.successRate = "not so successfull"
// console.log(student);

const character = {
  firstName: "shadowheart",
  class: "cleric",
  subClass: [
    { className: "wardomain", weapon: "mace" },
    { className: "lifedomain", weapon: "spells" },
  ],
  level: 8,
  spells: { heavy: "fireball", light: "bless" },
};

console.log(character.subClass[1].className);
character.spells.light = "first aid";
console.log(character.spells);

character.gender = "female";
console.log(character);

character["race"] = "elf";
console.log(character);

console.log(character.hasOwnProperty("firstName"));
console.log(Object.entries(character));
console.log(Object.keys(character));
console.log(Object.values(character));

const student = {
  firstName: "ege",
  age: 22,
  hobbies: [
    { name: "video games", place: "indoors" },
    { name: "basketball", place: "outdoors" },
  ],
  contact: { email: "kodun.krali.com", phone: 537827 },
  field: "Frontend",
};

// console.log(student);
// student.name = "mert"
// console.log(student);

student.hobbies[1].name = "soccer";
console.log(student.hobbies[1].name);
console.log(student.hobbies[1]);

student.course = "javascript";
console.log(student);

(student["age"] = 23), console.log(student.age);

console.log(student.hasOwnProperty("lastName"));
console.log(Object.entries(student));
console.log(Object.keys(student));
console.log(Object.values(student));

const videogame = {
  name: "Disco Elysium",
  length: 20,
  genre: "RPG",
  characters: [
    { firstName: "unknown", job: "cop" },
    { firstName: "Kim", job: "cop" },
  ],
  relaseDate: "10.15.2019",
  similarGames: [
    { name: "Divinity 2", relaseDate: "09.14.2017" },
    { name: "Baldurs Gate 3", relaseDate: "08.03.2023" },
  ],
};

console.log(videogame.similarGames[1].relaseDate);

videogame.similarGames[2] = {
  name: "Pillars of Eternity",
  relaseDate: "03.26.2015",
};
console.log(videogame.similarGames);

const propName = "name";
videogame.similarGames[1][propName] = "BG3";
console.log(videogame.similarGames);

videogame.characters[1].firstName = "Kim Jong";
console.log(videogame.characters);

console.log(videogame.hasOwnProperty("genre"));
console.log(Object.entries(videogame));
console.log(Object.keys(videogame));
console.log(Object.values(videogame));
