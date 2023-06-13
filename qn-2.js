function rgbToHex(rgb) {
    let r = parseInt(rgb.slice(4, rgb.indexOf(",")));
    
    let g = parseInt(rgb.slice(rgb.indexOf(",")+1 ));

    let b = parseInt( rgb.slice(rgb.lastIndexOf(",") + 1, rgb.length - 1));

    
    let hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
 
    
    console.log("#" + hex); 
  }
  rgbToHex("rgb(255,20,30)")