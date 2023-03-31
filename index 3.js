"use strict"

const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1;
const nowDay = now.getDate();

function howOldIAm(yearBirth, monthBirth, dayBirth) {
    let finalYear = nowYear - yearBirth;
    if (monthBirth >= nowMonth) {
        finalYear -= 1;
    }
    let finalMonth = 12 - (Math.abs(nowMonth - monthBirth));
    let finalDay = 0;
    if (nowDay < dayBirth) {
        finalMonth -= 1;
        if (nowMonth === 2) {
            finalDay = 28 - Math.abs((nowDay - dayBirth));
        }
        else if (nowMonth === 4 || nowMonth === 6 || nowMonth === 9 || nowMonth === 11) {
            finalDay = 30 - Math.abs((nowDay - dayBirth));
        }
        else if (nowMonth === 1 || nowMonth === 3 || nowMonth === 5 || nowMonth === 7 || nowMonth === 8 || nowMonth === 10 || nowMonth === 12) {
            finalDay = 31 - Math.abs((nowDay - dayBirth));
        }
    }
    else {
        finalDay = Math.abs(nowDay - dayBirth);
    }
    if (finalYear > 0 && finalMonth >= 0 && finalDay >= 0) {
        console.log(`Your Age Equals To : ${finalYear} Year(s) , ${finalMonth} Month(s) , ${finalDay} Day(s)`);

    } else {
        console.log("Error");
    }
}

howOldIAm(1998, 12, 31);