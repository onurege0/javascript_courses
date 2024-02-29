// const colors = ["blue", "red"];

// const newColors = colors;
// colors.push("green");
// console.log(newColors);
// console.log(colors);

// let name = "ege";
// let name1 = name;
// name = "onurege";
// console.log(name1);

// const newColors1 = [...colors];
// colors.push("black");
// console.log(newColors1);
// console.log(colors);

// const student = { name: "ege", lastName: "erkek" };
// const studentInfo = student;
// student.age = 22;
// console.log(studentInfo);

// const student1 = {...student};
// student.phone = 443532;
// console.log(student1);
// console.log(student);

const student = {
  firstName: "ege",
  lastName: "erkek",
  age: 22,
  courses: ["javascript", "css", "html"],
};

//shallow copy
const studentInfo = { ...student, phone: 2324 };
console.log(studentInfo);
console.log(student);

//deep copy
const studentInfo1 = JSON.parse(JSON.stringify({ ...student, phone: 2324 }));
console.log(studentInfo1);

console.log(Object.is(studentInfo, studentInfo1));

// const add = (num1, num2) => {
//   return num1 + num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function calculate(num1, num2, calculate) {
//   return calculate(num1, num2);
// }

// console.log(calculate(10, 2, add));

const students = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];

const ourOwnForEach = (arr, callbackFn) => {
  for (let index = 0; index < arr.length; index++) {
    callbackFn(arr[index], index);
  }
};

// const logElementWithIndex = (element, index) => {
//   console.log(`index ${index}: ${element}`);
// };

// ourOwnForEach(["Ahmet", "Mehmet", "Furkan"], (student, index) =>
//   console.log(`index ${index}: ${student}`)
// );
// ourOwnForEach(students, logElementWithIndex);

// ourOwnForEach(students, (student) => console.warn(student));

// function getEvenNums(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++)
//     if (i % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   return newArr;
// }

// console.log(getEvenNums([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getEvenNums(students));
// console.log(ourOwnForEach(nums, createEvenNums));

// console.log(ourOwnForEach(nums, getEvenNums));

function createEvenNums(index) {
  index = 0;
  const newArr = [];
  if (index % 2 === 0) {
    newArr.push(index);
  }
  return newArr;
}


const students1 = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];

const ourOwnMap = (arr, callbackFn) => {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const callbackResult = callbackFn(arr[index], index, arr);
        newArr.push(callbackResult);
    }
    return newArr;
}

// console.log(ourOwnMap(students, student => student.toUpperCase()));
// console.log(students);

const mapResult = ourOwnMap(
    students,
    (student, index) => {
        if (!(index % 2)) {
            return student;
        }
        // else {
        //     return students.pop()
        // }
    }
);

console.log(mapResult);
