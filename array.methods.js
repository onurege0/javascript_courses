const students = [
  {
    fullName: "Berkay Turna",
    age: 25,
    isDeleted: false,
    score: 90,
    isActive: true,
    courses: ["JavaScript", "React", "Node.js"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
    ],
  },
  {
    fullName: "Cenk Grid Kaynak",
    age: 32,
    isDeleted: false,
    score: 85,
    isActive: true,
    courses: ["JavaScript", "React Native", ".Net Core"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Korhan Kosece", topics: [".Net Core"] },
    ],
  },
  {
    fullName: "Ali Riza Taskiran",
    age: 24,
    isDeleted: false,
    score: 92,
    isActive: true,
    courses: ["Java", "Golang"],
    instructors: [
      { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
      { fullName: "Buse Seker", topics: ["Problem Solving"] },
    ],
  },
  {
    fullName: "Hakan Berke Temur",
    age: 24,
    isDeleted: false,
    score: 92,
    isActive: true,
    courses: ["Java", "Golang"],
    instructors: [
      { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
      { fullName: "Buse Seker", topics: ["Problem Solving"] },
    ],
  },
  {
    fullName: "Barkin Sayin",
    age: 22,
    isDeleted: false,
    score: 92,
    isActive: true,
    courses: ["Java", "Golang"],
    instructors: [
      { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
      { fullName: "Buse Seker", topics: ["Problem Solving"] },
    ],
  },
  {
    fullName: "Mert Kirant",
    age: 23,
    isDeleted: false,
    score: 88,
    isActive: true,
    courses: ["Expressjs", "Node.js"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Onur Ege Erkek",
    age: 23,
    isDeleted: false,
    score: 88,
    isActive: true,
    courses: ["Expressjs", "Node.js"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Firat Can Tas",
    age: 24,
    isDeleted: false,
    score: 60,
    isActive: false,
    courses: ["Expressjs", "Node.js", ".Net Core"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Ceren Dincer",
    age: 27,
    isDeleted: false,
    score: 75,
    isActive: true,
    courses: ["JavaScript", "HTNL"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Baris Peker",
    age: 38,
    isDeleted: true,
    score: 75,
    isActive: false,
    courses: ["JavaScript", "HTNL"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
];

//forEach
// const forEachResult = students.forEach(
//     (student, index, arr) => {
//         console.log(`index ${index}: ${student.fullName}`);
//         // console.log(arr);
//         return student;
//     }
// );

// console.log(forEachResult); /* undefined */

//map
const newStudents = students.map((student) => {
  return student.fullName;
});

// console.log(newStudents);
// console.log(newStudents.length);

//filter
// console.log(
//     students.filter(student => {
//         if (student.age < 30) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     })
// );
// console.log(
//     students.filter(student => student.age < 30)
// );

// console.log(
//     students.filter(student => !student.isDeleted && student.isActive)
// );

//SOME
// bir edizi içerisindeki elemanların en az birinin belirli bir koşulu sağlayıp sağlamadığını kontrol ediyor
// boolean
//orjinal diziyi değiştirmiyor

const isAnyStudentOver30 = students.some((student) => {
  return student.age > 30;
});

// console.log(isAnyStudentOver30)

//some
const studentsScore82 = students.some((student) => student.score > 82);
const studentsScore95 = students.some((student) => student.score > 95);
// console.log(studentsScore82);
// console.log(studentsScore95);

//every
const isStudentActive = students.every((student) => student.isActive);
// console.log(isStudentActive);

//find
const isMeAvaliable = students.find(
  (student) => student.fullName === "Onur Ege Erkek"
);
// console.log(isMeAvaliable);

//findIndex
const myIndex = students.findIndex(
  (student) => student.fullName === "Onur Ege Erkek"
);
// console.log(myIndex);

//sort
// const sortedStudentByScore = students.sort((a, b) => a.score - b.score);
// console.log(sortedStudentByScore);

const sortedStudentByName = students.map((student) => student.fullName.toUpperCase()).sort();
// console.log(sortedStudentByName);

const numbers = [3, 9, 7, 6, 8, 10, 20, 23, 89, 97];
const reducedNumbers = numbers
  .filter((num) => !(num % 2))
  .map((num) => num * 5)
  .reduce((total, num) => total + num);
  console.log(reducedNumbers);
