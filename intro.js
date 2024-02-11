let cumle = "kodlamaya bayılıyorum kodlamaya ve yazılıma.";
console.log(cumle);

const firstName = "Ege";
const lastName = "Erkek";
console.log(firstName, lastName);

let isim = "EGE";

let yas = 22;
console.log(yas);

const sayı = 47.3333;
console.log(sayı);

let metin = null;
console.log(metin);

let metin2;
console.log(metin2);

let cumle2 = 'Merhaba benim adım "Ege".';
console.log(cumle2);

let python = false;
console.log(python);

console.log(typeof metin, typeof cumle2, typeof sayı);

console.log(cumle.indexOf("kodlamaya", "kodlamaya"));

let cumle3 = "    Benim adım EGE      ";
console.log(cumle3.trim());

console.log(firstName.concat(lastName));
console.log(firstName.concat("     ", lastName));

console.log(firstName.toUpperCase());
console.log(isim.toLowerCase());

console.log(cumle.slice(4, 9));
console.log(cumle.slice(10));
console.log(cumle.slice(10, -5));

console.log(cumle.substring(10));
console.log(cumle.substring(10, -5));
console.log(cumle.substring(4, 9));

console.log(cumle2.replace("Merhaba", "selam"));
console.log(cumle.replace("kodlamaya", "yazılıma"));
console.log(cumle3.replace("EGE", "Mert"));

console.log(cumle.indexOf("bayılıyorum"));
console.log(cumle2.indexOf("adım"));
console.log(cumle3.indexOf("EGE"));

console.log(cumle.includes("kodlamaya"));
console.log(cumle.includes("araba"));

let studentName = "Ege";
let major = "Tercumanlik";
let gradDate = "2024";

console.log(
  `Sayın Öğrencimiz ${studentName} ${major} bölümünden ${gradDate} tarihinde mezun olacaktır.`
);

console.log(sayı.toString());
console.log(sayı.toFixed(2));

let sayı5 = 5.86;
console.log(sayı5.toFixed(0));
console.log(sayı5.toFixed(1));
console.log(sayı5.toFixed(2));
console.log(sayı5.toFixed(3));

console.log(sayı5.toPrecision());
console.log(sayı5.toPrecision(1));
console.log(sayı5.toPrecision(2));
console.log(sayı5.toPrecision(3));

console.log(sayı5.valueOf());
console.log(sayı5.valueOf(1));
console.log(sayı5.valueOf(2));
console.log(sayı5.valueOf(3));

console.log(Math.round(4.6));
console.log(Math.round(4.4));

console.log(Math.ceil(4.4));
console.log(Math.floor(4.6));

console.log(Boolean(yas > sayı));

console.log(sayı == sayı5);

let x = 5;
let y = "5";
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

console.log(5 + 12);

let a = 5;
let b = 6;
let c = 7;
let d = -2;
console.log(c > b && a < b);
console.log(c > b && a > b);
console.log(!(a > b));
console.log(!(a < b));

if (d > 0) {
  console.log("pozitif");
} else {
  console.log("negatif");
}

if (a == b) {
  console.log("doğru");
} else if (b > a) {
  console.log("doğru");
} else {
  console.log("yanlış");
}

console.log(Math.random() * 30 - 5.3);

console.log(Math.round(Math.random() * 100));
console.log(Math.ceil(Math.random() * 100));

console.log(Math.round(Math.random() * 17));
console.log(Math.ceil(Math.random() * 17));

console.log(Math.round(Math.random() * 10 - 5));
console.log(Math.ceil(Math.random() * 10) - 5);

console.log(Math.round(Math.random() * 32) - 32);
console.log(Math.floor(Math.random() * 32) - 32);

for (let num = 18; num < 22; num++) {
  console.log(num + " yaşındayım");
}

let person = {
  ad: "ege",
  city: "izmir",
  uni: "ege üniversitesi",
  major: "translator",
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

let kelime = "yazılım";
for (let x of kelime) {
  console.log(x);
}

let num1 = 18;
while (num1 < 22) {
  console.log(num1 + " yaşındayım");
  num1++;
}

let num2 = 5;
do {
  console.log(num2 + " yaşındayım");
  num2++;
} while (num2 > 10);

console.log(Math.ceil(10.3));
console.log(Math.ceil(-10.3));

console.log(Math.floor(86.9));
console.log(Math.floor(-86.1));

console.log(Math.trunc(10.3));
console.log(Math.trunc(-10.3));

console.log(Math.pow(16, 9));
console.log(Math.pow(-5, 3));

console.log(Math.sqrt(25));
console.log(Math.sqrt(67.4));

console.log(Math.abs(127.43));

console.log(Math.ceil(10.3));

console.log(Math.min(-13.47, -13.48));
console.log(Math.max(-27, -14, -4.9, -3));

let age = 66;
if (age < 18) {
  console.log("underage");
} else if (age < 65) {
  console.log("young adult");
} else if (age >= 65) {
  console.log("senior");
} else {
  console.log("cannot pass");
}

let araba = "Mercedes";

if (age < 16) {
  console.log("ergen");
} else {
  console.log("yetişkin");
}

let age3 = 20;
age3 > 16 ? console.log("ergen") : console.log("yetişkin");
console.log(age3 > 16 ? console.log("ergen") : console.log("yetişkin"));

Math.pow(4, 3)
console.log(num11 = 3);

for (let num = 18; num < 22; num++) {
  console.log(num + " yaşındayım");
}

let num3 = 18;
while (num3 < 22) {
  console.log(num3 + " yaşındayım");
  num3++;
}
let num10;
console.log(num10);

let paragraf1 = "Lorem cart curt";
console.log(paragraf1.length);

age3 > 15 && console.log("ege");
num3 > 30 && console.log("yanlış");

num4 = 18;
if (num4 < 20 && num4 > 15) {
  console.log("doğru");
}

num4 > 20 || console.log("doğru");
!(num4 > 19) || console.log("yanlış");
if (num4 > 15 || num4 < 3) {
  console.log(
    "muhafakatsizleştiremediklerimizdenmisinMuvaffakiyetsizleştiricileştiriveremeyebileceklerimizdiz?"
  );
}

let day = 3

Math.abs()
console.log(Math.abs(25));

switch (day) {
  case 1:
    console.log("pazartesi");
    break;
  case 2:
    console.log("salı");
    break;
  case 3:
    console.log("çarşamba");
    break;
  case 4:
    console.log("perşembe");
    break;
  case 5:
    console.log("cuma");
    break;
  case 6:
    console.log("cumartesi");
    break;
  case 7:
    console.log("pazar");
    break;

  default:
    console.log("invalid day");
    break;
}

if (day > 5 && day < 8) {
  console.log("hafta sonu");
} else if (day <= 5) {
  console.log("hafta içi");
} else console.log("invalid day");

let month = -15;
month = month % 12;
switch (Math.abs(month)) {
  case 1:
    console.log("ocak");
    break;
  case 2:
    console.log("şubat");
    break;
  case 3:
    console.log("mart");
    break;
  case 4:
    console.log("nisan");
    break;
  case 5:
    console.log("mayıs");
    break;
  case 6:
    console.log("haziran");
    break;
  case 7:
    console.log("temmuz");
    break;
  case 8:
    console.log("ağustos");
    break;
  case 9:
    console.log("eylül");
    break;
  case 10:
    console.log("ekim");
    break;
  case 11:
    console.log("kasım");
    break;
  case 12:
    console.log("aralık");
    break;

  default:
    console.log("invalid month");
    break;
}
let metin1 = "Mert kalk! ders çalış!";
let index = 0;
while (index > metin1.length) {
  if (metin1[index] === " " || metin1[index] === ",") {
    index++;
  } else {
    console.log(metin1[index]);
    index++;
  }
}

let index1 = metin1.length - 1;
while (index1 >= 0) {
  if (metin1[index1] === " " || metin1[index1] === ",") {
    index1--;
  } else {
    console.log(metin1[index1]);
    index1--;
  }
}


for (let i = index1; i >= 0; i--) {
  console.log(metin1[i]);
}
