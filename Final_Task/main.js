//Matrix size
fr = 4;
var side = 15;
var n = 50;
var gr = 50;
var GrEat = 30;
var Predat = 15;
var sunk = 5;
var energetik = 20;
var GrassArr = [];
var GribArr = [];
var GrassEaterArr = [];
var KillerArr = [];
var PredatorArr = [];
var EnergetikArr = [];

//Matrix create
function generate(matLen, gr, GrEat, Predat, sunk, energetik) {
    let Matrix = [];
    for (let i = 0; i < matLen; i++) {
        Matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            Matrix[i][j] = 0
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (Matrix[y][x] == 0) {
            Matrix[y][x] = 1
        }
    }
    for (let i = 0; i < GrEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (Matrix[y][x] == 0) {
            Matrix[y][x] = 2
        }
    }
    for (let i = 0; i < Predat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (Matrix[y][x] == 0) {
            Matrix[y][x] = 3
        }
    }
    for (let i = 0; i < sunk; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (Matrix[y][x] == 0) {
            Matrix[y][x] = 4
        }
    }
    for (let i = 0; i < energetik; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (Matrix[y][x] == 0) {
            Matrix[y][x] = 5
        }
    }
    return Matrix;
}
let Matrix = generate(n, gr, GrEat, Predat, sunk, energetik)

function setup() {
    frameRate(fr);
    createCanvas(Matrix[0].length * side, Matrix.length * side);
    background('#acacac');

    for (var y2 = 0; y2 < Matrix.length; y2++) {
        for (var x2 = 0; x2 < Matrix[y2].length; x2++) {
            if (Matrix[y2][x2] == 1) {
                var element = new Grass(x2, y2);
                GrassArr.push(element);
            } else if (Matrix[y2][x2] == 2) {
                var EaterElement = new GrassEater(x2, y2);
                GrassEaterArr.push(EaterElement);
            } else if (Matrix[y2][x2] == 3) {
                var PredatorElement = new Predator(x2, y2);
                PredatorArr.push(PredatorElement);
            } else if (Matrix[y2][x2] == 4) {
                var GribElement = new Grib(x2, y2);
                GribArr.push(GribElement);
            } else if (Matrix[y2][x2] == 5) {
                var EnergetikElement = new Energetik(x2, y2);
                EnergetikArr.push(EnergetikElement);
            }
        }
    }
}

function draw() {
    for (var y1 = 0; y1 < Matrix.length; y1++) {
        for (var x1 = 0; x1 < Matrix[y1].length; x1++) {

            if (Matrix[y1][x1] == 1) {
                fill("green");
            }
            else if (Matrix[y1][x1] == 0) {
                fill("#acacac");
            }
            else if (Matrix[y1][x1] == 2) {
                fill("yellow");
            }
            else if (Matrix[y1][x1] == 3) {
                fill("red");
            }
            else if (Matrix[y1][x1] == 4) {
                fill("blue");
            }
            else if (Matrix[y1][x1] == 5) {
                fill("black");
            }
            else if (Matrix[y1][x1] == 6) {
                fill("orange");
            }
            rect(x1 * side, y1 * side, side, side);
        }
    }
    for (var o in GrassArr) {
        GrassArr[o].mul();
    }
    for (var a in GrassEaterArr) {
        GrassEaterArr[a].eat();
    }
    for (var z in PredatorArr) {
        PredatorArr[z].eat();
    }
    for (var p in GribArr) {
        GribArr[p].mul();
    }
    for (var l in EnergetikArr) {
        EnergetikArr[l].mul();
    }
    for (var b in KillerArr) {
        KillerArr[b].eat();
    }
    // noLoop();
}