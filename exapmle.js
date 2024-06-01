const users = [
  {
    id: 1,
    firstName: "john ",
    lastName: "DoE  ",
    email: "johndoe@example.com",
    age: 28,
    registered: "2020-03-15",
    city: "New York",
    score: 82.5,
    birthDay: {
      day: 11,
      year: 1990,
      month: "Nisan",
    },
    skills: ["JavaScript", "React", "Node.js"],
    education: {
      degree: "Lisans",
      field: "Bilgisayar Bilimi",
      university: "NYU",
      graduationYear: 2012,
    },
    experience: [
      {
        company: "Teknoloji A.Ş.",
        role: "Frontend Developer",
        years: 3,
      },
      {
        company: "Web Çözümleri",
        role: "Junior Developer",
        years: 2,
      },
    ],
    hobbies: ["Okuma", "Seyahat", "Yüzme"],
  },
  {
    id: 2,
    firstName: "jaNE ",
    lastName: "sMiTH",
    email: "janesmith@example.com",
    age: 22,
    registered: "2021-06-20",
    city: "Los Angeles",
    score: 90.0,
    birthDay: {
      day: 25,
      year: 1998,
      month: "Temmuz",
    },
    skills: ["Python", "Django", "Makine Öğrenimi"],
    education: {
      degree: "Yüksek Lisans",
      field: "Yapay Zeka",
      university: "UCLA",
      graduationYear: 2020,
    },
    experience: [
      {
        company: "AI Yenilikçiler",
        role: "Data Scientist",
        years: 2,
      },
    ],
    hobbies: ["Bisiklet", "Resim"],
  },
  {
    id: 3,
    firstName: " aLice ",
    lastName: "johNson ",
    email: "alicejohnson@example.com",
    age: 35,
    registered: "2018-07-10",
    city: "Chicago",
    score: 77.0,
    birthDay: {
      day: 5,
      year: 1985,
      month: "Mart",
    },
    skills: ["Java", "Spring", "Hibernate"],
    education: {
      degree: "Lisans",
      field: "Yazılım Mühendisliği",
      university: "University of Chicago",
      graduationYear: 2007,
    },
    experience: [
      {
        company: "Kurumsal Çözümler",
        role: "Backend Developer",
        years: 7,
      },
      {
        company: "Yenilikçi Uygulamalar",
        role: "Senior Developer",
        years: 5,
      },
    ],
    hobbies: ["Bahçecilik", "Yemek Yapma"],
  },
  {
    id: 4,
    firstName: "bOb ",
    lastName: "broWn ",
    email: "bobbrown@example.com",
    age: 30,
    registered: "2019-11-05",
    city: "Houston",
    score: 85.0,
    birthDay: {
      day: 17,
      year: 1992,
      month: "Aralık",
    },
    skills: ["C#", ".NET", "Azure"],
    education: {
      degree: "Lisans",
      field: "Bilgi Teknolojisi",
      university: "Texas A&M",
      graduationYear: 2014,
    },
    experience: [
      {
        company: "Bulut Hizmetleri",
        role: "Bulut Mühendisi",
        years: 4,
      },
      {
        company: "BT Çözümleri",
        role: "Sistem Yöneticisi",
        years: 3,
      },
    ],
    hobbies: ["Yürüyüş", "Fotoğrafçılık"],
  },
  {
    id: 5,
    firstName: " mAry annE ",
    lastName: "jAckSon ",
    email: "maryjackson@example.com",
    age: 27,
    registered: "2021-05-15",
    city: "San Francisco",
    score: 88.0,
    birthDay: {
      day: 8,
      year: 1994,
      month: "Mayıs",
    },
    skills: ["HTML", "CSS", "JavaScript"],
    education: {
      degree: "Lisans",
      field: "Web Tasarımı",
      university: "Stanford",
      graduationYear: 2016,
    },
    experience: [
      {
        company: "Web Studio",
        role: "Frontend Developer",
        years: 3,
      },
      {
        company: "Creative Solutions",
        role: "UI Designer",
        years: 2,
      },
    ],
    hobbies: ["Yazma", "Çizim"],
  },
  {
    id: 6,
    firstName: "pETer pArKer ",
    lastName: "smith",
    email: "peterparker@example.com",
    age: 29,
    registered: "2022-02-25",
    city: "New York",
    score: 92.0,
    birthDay: {
      day: 15,
      year: 1993,
      month: "Ocak",
    },
    skills: ["JavaScript", "Vue.js", "Node.js"],
    education: {
      degree: "Lisans",
      field: "Bilgisayar Mühendisliği",
      university: "Columbia University",
      graduationYear: 2015,
    },
    experience: [
      {
        company: "Tech Innovators",
        role: "Full Stack Developer",
        years: 4,
      },
      {
        company: "NextGen Solutions",
        role: "Backend Developer",
        years: 3,
      },
    ],
    hobbies: ["Tırmanma", "Kayak"],
  },
];

// users.map((user) => user.firstName.charAt(0).toUpperCase());
// console.log(users.map((user) => user.firstName.charAt(0).toUpperCase()));

function uppercaseFirstLetter(string) {
  const arr = string.trim().toLowerCase().split(" ");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
}

const newUsersNameArr = users.map(
  (user) =>
    uppercaseFirstLetter(user.firstName) + " " + user.lastName.toUpperCase()
);
console.log(newUsersNameArr);

function convertMonthToNumber(user) {
  let month = user.birthDay.month;
  switch (month) {
    case "Ocak":
      month = "01";
      break;
    case "Şubat":
      month = "02";
      break;
    case "Mart":
      month = "03";
      break;
    case "Nisan":
      month = "04";
      break;
    case "Mayıs":
      month = "05";
      break;
    case "Haziran":
      month = "06";
      break;
    case "Temmuz":
      month = "07";
      break;
    case "Ağustos":
      month = "08";
      break;
    case "Eylül":
      month = "09";
      break;
    case "Ekim":
      month = "10";
      break;
    case "Kasım":
      month = "11";
      break;
    case "Aralık":
      month = "12";
      break;
  }
  return month;
}

const birthdayArr = users.map(
  (user) =>
    user.birthDay.day +
    "-" +
    convertMonthToNumber(user) +
    "-" +
    user.birthDay.year
);

console.log(birthdayArr);

const infoArr = users.map(
  (user) =>
    `${uppercaseFirstLetter(user.firstName)} ${user.lastName.toUpperCase()} ${
      user.birthDay.day
    }-${convertMonthToNumber(user)}-${user.birthDay.year} tarihinde doğmuştur`
);

console.log(infoArr);
