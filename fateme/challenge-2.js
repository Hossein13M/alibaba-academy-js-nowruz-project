function convertRGBtoHex(...args) {
  if (!validationCheck(args)) return "bad request!";
  let result = "#";
  for (const arg of args) {
    result += decToHex(arg);
  }
  return result;
}

function decToHex(colorCode) {
  const hexCode = [];
  while (colorCode !== 0) {
    let remainder = colorCode % 16;
    switch (remainder) {
      case 10:
        hexCode.unshift("A");
        break;
      case 11:
        hexCode.unshift("B");
        break;
      case 12:
        hexCode.unshift("C");
        break;
      case 13:
        hexCode.unshift("D");
        break;
      case 14:
        hexCode.unshift("E");
        break;
      case 15:
        hexCode.unshift("F");
        break;
      default:
        hexCode.unshift(remainder);
        break;
    }
    colorCode = Math.floor(colorCode / 16);
  }
  while (hexCode.length !== 2) {
    hexCode.unshift(0);
  }
  return hexCode.join("");
}

function validationCheck(args) {
  if (!isCountOfColorsThree(args)) return false;
  for (const colorNumber of args) {
    if (!isTypeValid(colorNumber, "number")) return false;
    if (!isColorNumberInRange(colorNumber)) return false;
  }
  return true;
}

function isCountOfColorsThree(args) {
  if (args.length === 3) return true;
  return false;
}

function isTypeValid(value, trueType) {
  if (typeof value === trueType) return true;
  return false;
}

function isColorNumberInRange(colorNumber) {
  return colorNumber >= 0 && colorNumber <= 255;
}

// test case for converting RGB to HEX format
console.log(`HEX code converted from RGB(0, 0, 0, 0): ${convertRGBtoHex(0, 0, 0, 0)}`);
console.log(`HEX code converted from RGB('0', 0, 0): ${convertRGBtoHex("0", 0, 0)}`);
console.log(`HEX code converted from RGB(255, 255, 256): ${convertRGBtoHex(255, 255, 256)}`);
console.log(`HEX code converted from RGB(0, 0, 0): ${convertRGBtoHex(0, 0, 0)}`);
console.log(`HEX code converted from RGB(25, 56, 123): ${convertRGBtoHex(25, 56, 123)}`);
