"use strict"

function rgbaToHex(red, green, blue) {
    return (red.toString(16) + (green.toString(16)) + blue.toString(16))
}

const hexaDecimal = rgbaToHex(53, 96, 243);

console.log("#" + hexaDecimal);