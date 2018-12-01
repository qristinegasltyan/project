class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 10;
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
            matrix[newy][newx] = 3
            matrix[this.y][this.x] = 0
            this.x = newx
            this.y = newy
        }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 7) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 3;
            var newgt = new Gishatich(newx, newy, 3)
            gishaticharr.push(newgt)
        }
    }
    eat() {
        var food = random(this.chooseCell(2))
        if(food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 3
            matrix[this.y][this.x] = 0

            for(var i in xotakerarr) {
                if(xotakerarr[i].x == newx && xotakerarr[i].y == newy){
                    xotakerarr.splice(i,1)
                }
            }
            this.x = newx
            this.y = newy
            this.energy += 2
        }
    }
    die() {
        if(this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for(var i in gishaticharr) {
                if(gishaticharr[i].x == this.x && gishaticharr[i].y == this.y) {
                    gishaticharr.splice(i,1)
                }
            }
        }
    }
}