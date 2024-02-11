let metin = "Mert kalk!ders çalış!";

// let index = metin.length - 1;
// while (index1 >= 0) {
//   if (metin1[index1] === " " || metin1[index1] === ",") {
//     index1--;
//   } else {
//     console.log(metin1[index1]);
//     index1--;
//   }
// }

// for (let i = index; i >= 0; i--) {
//   console.log(metin[i]);
// }

// let index = 5;
// while (index < metin.length) {
//     console.log(metin[index]);
//     index = index + 5;
// }

// for (i = 5; i < metin.length; i = i + 5) {
//     console.log(metin[i]);
// }

// let index = 0
// while (index < metin.length) {
//     console.log (`index ${index}`);
//     console.log(metin[index]);
//     index = index + 2
// }

for (i = 0; i < metin.length; i = i + 2) {
  console.log(`index ${i}`);
  console.log(metin[i]);
}

let numbers = [1, 2, 3, 4, 5]
for (let key in numbers) {
    console.log(numbers[key]);
}

console.log(numbers.length);
console.log(numbers.toString());
console.log(numbers.at(2));
console.log(numbers[2]);

let renkler = ["sarı", "mavi", "yeşil", "kırmızı"]
// console.log(renkler.join(" + "));
// console.log(renkler.pop());
// console.log(renkler);
// console.log(renkler.join(" + "));
// console.log(renkler.push("kırmızı"));
// console.log(renkler);
// console.log(renkler.shift());
// console.log(renkler);
// console.log(renkler.unshift("kırmızı"));
// console.log(renkler);
// renkler[1] = "kırmızı"
// console.log(renkler);
// delete renkler[0]
// console.log(renkler[0]);

let onlinegames = ["lol", "wow"]
let singlegames = ["bg3", "skyrim"]
console.log(onlinegames.concat(singlegames));
console.log(onlinegames.concat("overwatch"));
console.log(onlinegames);

// console.log(renkler.copyWithin(3,0,3));

// let renkler = [["sarı", "mavi"], ["yeşil", "kırmızı"]]
// console.log(renkler.flat());

// renkler.splice(1,0,"turuncu")
// console.log(renkler);

// let colors = ["kırmızı", "mavi", "sarı"];
// let newcolors = colors.toSpliced(0, 1);
// console.log(newcolors);

let yenirenkler = renkler.slice(1, 3)
console.log(yenirenkler);
console.log(renkler);

let i2 = 0
while (i2 < renkler.length) {
    console.log("en sevdiğim renk " + renkler[i2]);
    i2++;
}

let numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (i = 0; i < numbers2.length; i = i + 2) {
    console.log("çifte sayılar şunlardır: " + numbers2[i]);
}

let i3 = 10
do {console.log(numbers2[i3]);
i3++}
while (i3 < numbers.length)