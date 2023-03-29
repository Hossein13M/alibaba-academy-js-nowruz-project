"use strict"

function convertDateToDaysAfterJesus(year,month,day){
    return (year * 365) + (month * 30) + day ;
}

function monthWeekDayCounter(year, month, day) {
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayday = today.getDate();

    if ((year > todayYear) || ((year == todayYear) && month > (todayMonth)) || ((year == todayYear) && (month == todayMonth) && (day > todayday))) {
        return ({
            "error" : "birthday can not be in the future !",
            "status" : "400"
        })
    }

    var todayTotalDays = convertDateToDaysAfterJesus(todayYear, todayMonth, todayday);
    var birthdayTotalDays = convertDateToDaysAfterJesus(year, month, day);
    var totalDaysBetween = todayTotalDays - birthdayTotalDays;
    var totalMonthsBetween = totalDaysBetween / 30 ;
    var totalWeeksBetween = totalDaysBetween / 7 ;
    return ({
        "month" : totalMonthsBetween,
        "day" : totalDaysBetween,
        "week" : totalWeeksBetween,
    })
}


var res = monthWeekDayCounter(2002,3,12);
console.log(res)
