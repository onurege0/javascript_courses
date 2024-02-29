"use strict";
// function Phone(model, battery, color, ram, storage, colors, camera) {
//   this.model = model;
//   this.battery = battery;
//   this.color = color;
//   this.ram = ram;
//   this.storage = storage;
//   this.colors = colors;
//   this.camera = camera;
//   Object.seal(this);
// }

// Phone.prototype.logAllValues = (arg) => {
//   console.log(arg);
// };
// logAllValues(phone1)

// const phone1 = new Phone("iphone15", 3200, "blue", 6, 256, [
//   "red",
//   "black",
//   "blue",
// ]);
// console.log(phone1);

// const phone2 = new Phone("s24", 5000, "black", 12, 512, [
//   "green",
//   "white",
//   "orange",
// ]);
// console.log(phone2);

// const phone3 = new Phone("note30", 4500, "red", 16, 128, [
//   "yellow",
//   "purple",
//   "pink",
// ]);
// console.log(phone3);

// const phones = [];
// // console.log(phones);
// // phones.push(phone1, phone2, phone3);
// // console.log(phones);

// // phone1.chip = "m1";
// phone1.battery = 3500;

// function add(object) {
//   if (object instanceof Phone) {
//     phones.push(object);
//   } else {
//     throw "Bu bir Phone nesnesi değildir.";
//   }
// }

// add(phone1);
// // add("ege")
// console.log(phones);

class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.#firstName}, ${this.#lastName}`;
  }

  //   set fullName(name) {
  //     name.split(" ");
  //     this.#firstName[0]
  //     this.#lastName[1]
  //   }
}

const person1 = new Person("Ege", "Erkek", 22);
console.log(person1);
