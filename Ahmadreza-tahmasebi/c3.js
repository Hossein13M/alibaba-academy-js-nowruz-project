"use strict"

function convertDateToDaysAfterJesus(year,month,day){
    return (year * 365) + (month * 30) + day ;
}

function monthWeekDayCounter(year, month, day) {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayday = today.getDate();

    if ((year > todayYear) || ((year === todayYear) && month > (todayMonth)) || ((year === todayYear) && (month === todayMonth) && (day > todayday))) {
        return ("error : birthday can not be in the future !")
    }

    const todayTotalDays = convertDateToDaysAfterJesus(todayYear, todayMonth, todayday);
    const birthdayTotalDays = convertDateToDaysAfterJesus(year, month, day);
    const totalDaysBetween = todayTotalDays - birthdayTotalDays;
    const totalMonthsBetween = totalDaysBetween / 30 ;
    const totalWeeksBetween = totalDaysBetween / 7 ;
    return ({
        "month" : totalMonthsBetween,
        "day" : totalDaysBetween,
        "week" : totalWeeksBetween,
    })
}


let res = monthWeekDayCounter(2112,3,12);
console.log(res)

res = monthWeekDayCounter(2002,3,12);
console.log(res)
