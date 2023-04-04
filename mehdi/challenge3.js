// import readline from 'readline';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getBirthday() {
    return new Promise(resolve => {
      rl.question('Please enter your birthday in the format of MM/DD/YYYY: ', answer => {
        resolve(answer);
      });
    });
}

function validateBirthday(birthday) {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();
    if (birthdayDate > currentDate) {
      console.log('Please enter a valid birthday in the past.');
      return false;
    }
    return true;
}

async function calculateAge() {
    let validBirthday = false;
    let birthday;
    while (!validBirthday) {
      birthday = await getBirthday();
      validBirthday = validateBirthday(birthday);
    }
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdayDate;
    const millisecondsInDay = 86400000;
    const millisecondsInMonth = millisecondsInDay * 30.44;
    const millisecondsInYear = millisecondsInDay * 365.25;
    const years = Math.floor(ageInMilliseconds / millisecondsInYear);
    const months = Math.floor((ageInMilliseconds % millisecondsInYear) / millisecondsInMonth);
    const days = Math.floor((ageInMilliseconds % millisecondsInMonth) / millisecondsInDay);
    console.log(`You are ${years} years, ${months} months, and ${days} days old.`);
    rl.close();
}

calculateAge();
