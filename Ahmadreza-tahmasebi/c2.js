"use strict"

function RGBToHex(R, G, B) {
    var error = []
    if (!(R >= 0 && R<256)){
        error.push("bad parameter for R");
    }
    if (!(G >= 0 && G<256)){
        error.push("bad parameter for G");
    }
    if (!(B>= 0 && B<256)){
        error.push("bad parameter for B");
    }

    if (error.length != 0){
        return {"error" : error, "status" : "400"}
    }
    var digitOneTwo = (R.toString(16).length) == 2 ? R.toString(16) : `0${R.toString(16)}`;
    var digitThreeFour = (G.toString(16).length) == 2 ? G.toString(16) : `0${G.toString(16)}`;
    var digitFiveSix = (B.toString(16).length) == 2 ? B.toString(16) : `0${B.toString(16)}`;
    return {"code" : digitOneTwo + digitThreeFour + digitFiveSix, "status" : 200} ;
}

var hex = RGBToHex(255,0,255);
console.log(hex)