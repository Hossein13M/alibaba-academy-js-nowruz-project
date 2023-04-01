function clacAge(birthday) {
  let birthdate = new Date(birthday)
  let today = new Date()

  let yearAge = today.getFullYear() - birthdate.getFullYear()
  let monthAge = (today.getMonth() - birthdate.getMonth()) + (12 * (today.getFullYear() - birthdate.getFullYear()))
  let dayAge = Math.floor((today.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24))
  let weekAge = Math.floor(dayAge / 7)
  return {
    yearAge,
    monthAge,
    dayAge,
    weekAge
  }
} 
const age = clacAge("2001-8-11")
console.log(age.yearAge);
console.log(age.monthAge);
console.log(age.dayAge);
console.log(age.weekAge);