function rgbToHex(red, green, blue) {
    const redHex = red.toString(16).padStart(2, '0')
    const greenHex = green.toString(16).padStart(2, '0')
    const blueHex = blue.toString(16).padStart(2, '0')

    const hexCode = `#${redHex}, ${greenHex}, ${blueHex}`
    return hexCode
  }
  const result = rgbToHex(255, 0, 0)
  console.log(result);