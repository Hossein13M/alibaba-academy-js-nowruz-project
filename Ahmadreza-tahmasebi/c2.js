"use strict"

function rgbToHex(r, g, b) {
    var error = []
    if (!(Rr >= 0 && r<256)){
        error.push("bad parameter for R");
    }
    if (!(g >= 0 && g<256)){
        error.push("bad parameter for G");
    }
    if (!(b>= 0 && b<256)){
        error.push("bad parameter for B");
    }

    if (error.length != 0){
        return {"error" : error, "status" : "400"}
    }
    var digitOneTwo = (r.toString(16).length) == 2 ? r.toString(16) : `0${r.toString(16)}`;
    var digitThreeFour = (g.toString(16).length) == 2 ? g.toString(16) : `0${g.toString(16)}`;
    var digitFiveSix = (b.toString(16).length) == 2 ? b.toString(16) : `0${b.toString(16)}`;
    return {"code" : digitOneTwo + digitThreeFour + digitFiveSix, "status" : 200} ;
}

var hex = rgbToHex(255,0,255);
console.log(hex)
