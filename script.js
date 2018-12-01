
var side = 30;
var grassarr = [];
var xotakerarr = [];
var gishaticharr = [];
var virusarr = [];
var kkkarr = [];
var m = 20
var n = 30
var matrix = []
var side = 20
function getRandInt(max) {
    return Math.round(Math.random() * Math.floor(max))
}
for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {

        matrix[y].push(getRandInt(6))
    }
} console.log(matrix)

var side = 30;
var grassarr = [];
var xotakerarr = [];
var predatorarr = [];
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            grassarr.push(new Grass(x, y, 1))
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerarr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            gishaticharr.push(new Gishatich(x, y))
        
        }
        else if (matrix[y][x] == 4){
            virusarr.push(new Virus(x,y))
        }
        else if (matrix[y][x] == 5){
            kkkarr.push(new Kkk(x,y))
        }
    }
}
function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function draw() {
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
          
            if (matrix[y][x] == 0) {
                fill("#acacac")
            }
            else if (matrix[y][x] == 1) {
                fill("green") //  grass 1
            }
            else if (matrix[y][x] == 2) {
                fill('yellow') // xotaker 2
            }
            else if (matrix[y][x] == 3) {
                fill('red') // gishatich 3
            }
            else if (matrix[y][x] == 4) {
                fill('black') //virus 4
            }
            else if (matrix[y][x] == 5) {
                fill('pink') //kkk 5
            }
            rect(x * side, y * side, side, side);

            /*fill("blue")
            text(x + " " + y, x * side + side / 2, y * side + side / 2)*/
        }
    }
    for (var i in grassarr) {
          
        grassarr[i].mult()
    }
    for (var i in xotakerarr) {
        xotakerarr[i].move()
        xotakerarr[i].eat()
        xotakerarr[i].mult()
        xotakerarr[i].die()
    }


    for (var i in gishaticharr) {
        gishaticharr[i].move()
        gishaticharr[i].eat()
        gishaticharr[i].mult()
        gishaticharr[i].die()
    }

    for (var i in virusarr) {
        virusarr[i].move()
        virusarr[i].eat()
        virusarr[i].mult()
        virusarr[i].die()
    }
    for (var i in kkkarr) {
        kkkarr[i].move()
        kkkarr[i].eat()
        kkkarr[i].mult()
        kkkarr[i].die()
    }
}