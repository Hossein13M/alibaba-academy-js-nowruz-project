"use strict"

function starPrinter(rows) {
    const stars = [""];
    const spaces = [];
    for (let i = 0; i < rows; i++) {
        spaces.push(" ");
    }
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            if (i === 1) {
                stars.push("*");
                break;
            }
            else {
                stars.push("**");
                break;
            }
        }
        spaces.pop();
        console.log(spaces.join("") + stars.join(""));
    }
}
starPrinter(5);