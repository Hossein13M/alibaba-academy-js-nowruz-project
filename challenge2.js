// Create a function to convert color numbers from RGB into HEX code.
function rbbToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
  
function ConvertRGBtoHex(red, green, blue) {
    return "#" + rbbToHex(red) + rbbToHex(green) + rbbToHex(blue);
}
console.log(ConvertRGBtoHex("1", 100, 200));
