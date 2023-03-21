function calcAge(birthDate) {
  if (!isDateValid(birthDate)) return "bad request!";
  let birthDateExtraction = {
    year: birthDate.getYear(),
    month: birthDate.getMonth(),
    day: birthDate.getDate(),
  };
  let now = new Date();
  let currentDate = {
    year: now.getYear(),
    month: now.getMonth(),
    day: now.getDate(),
  };
  let age = {
    year: currentDate.year - birthDateExtraction.year,
    month: currentDate.month - birthDateExtraction.month,
    day: currentDate.day - birthDateExtraction.day,
  };
  if (age.month < 0) {
    age.month += 12;
    age.year--;
  }
  if (age.day < 0) {
    age.day += 31;
    age.month--;
  }
  return age;
}

const isDateValid = function (date) {
  return date instanceof Date && date <= new Date();
};

// test case for age calculation
console.log(calcAge());
console.log(calcAge(100));
console.log(calcAge("100"));
console.log(calcAge(new Date("06/24/2024")));
console.log(calcAge(new Date("12/24/2023")));
console.log(calcAge(new Date("01/24/2023")));
console.log(calcAge(new Date("06/24/2008")));
console.log(calcAge(new Date("09/12/2000")));
