
class Kkk {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy -= 2
        if(empty) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 5
            matrix[this.y][this.x] = 0
            this.x = newx
            this.y = newy
        }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 11) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 5;
            var newkk = new Kkk(newx, newy, 5)
            kkkarr.push(newkk)
        }
    }
    eat() {
        var food = random(this.chooseCell(3))
        var food1 = random(this.chooseCell(2))
        if(food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 5
            matrix[this.y][this.x] = 0

            for(var i in gishaticharr) {
                if(gishaticharr[i].x == newx && gishaticharr[i].y == newy){
                    gishaticharr.splice(i,1)
                }
                for(var i in grassarr){
                    if(grassarr[i].x == newx && grassarr[i].y == newy){
                        grassarr.splice(i,1)
                    }
                }
            }
            this.x = newx
            this.y = newy
            this.energy += 4
        }
    }
    die() {
        if(this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for(var i in kkkarr) {
                if(kkkarr[i].x == this.x && kkkarr[i].y == this.y) {
                    kkkarr.splice(i,1)
                }
            }
        }
    }
}