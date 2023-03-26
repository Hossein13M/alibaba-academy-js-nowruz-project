function calcAge(birthDate) {
  if (!validationCheck(birthDate)) return "bad request!";
  const birthDateExtraction = {
    year: birthDate.getYear(),
    month: birthDate.getMonth(),
    day: birthDate.getDate(),
  };
  let now = new Date();
  const currentDate = {
    year: now.getYear(),
    month: now.getMonth(),
    day: now.getDate(),
  };
  const age = {
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
  return JSON.stringify(age);
}

function validationCheck(date) {
  if (!isDateTypeValid(date)) return false;
  if (!isDateOlderThanNow(date)) return false;
  return true;
}

function isDateTypeValid(date) {
  return date instanceof Date;
}

function isDateOlderThanNow(date) {
  return date <= new Date();
}

// test case for age calculation
console.log(`${calcAge()}`);
console.log(`100: ${calcAge(100)}`);
console.log(`'100': ${calcAge("100")}`);
console.log(`06/24/2024: ${calcAge(new Date("06/24/2024"))}`);
console.log(`12/24/2023: ${calcAge(new Date("12/24/2023"))}`);
console.log(`01/24/2023: ${calcAge(new Date("01/24/2023"))}`);
console.log(`06/24/2008: ${calcAge(new Date("06/24/2008"))}`);
console.log(`09/12/2000: ${calcAge(new Date("09/12/2000"))}`);
