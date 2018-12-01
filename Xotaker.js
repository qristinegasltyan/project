
class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 4;
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
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 7) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 2;
            var newxt = new Xotaker(newx, newy, 2)
            xotakerarr.push(newxt)
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if(empty) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 2
            matrix[this.y][this.x] = 0
            this.x = newx
            this.y = newy
        }
    }
    eat() {
        var food = random(this.chooseCell(1))
        if(food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 2
            matrix[this.y][this.x] = 0

            for(var i in grassarr) {
                if(grassarr[i].x == newx && grassarr[i].y == newy){
                    grassarr.splice(i,1)
                }
            }
            this.x = newx
            this.y = newy
            this.energy++
        }
    }
    die() {
        if(this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for(var i in xotakerarr) {
                if(xotakerarr[i].x == this.x && xotakerarr[i].y == this.y) {
                    xotakerarr.splice(i,1)
                }
            }
        }
    }
}