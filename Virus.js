class Virus {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 15;
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3]
        ];
    }
    getNewDirections() {
        this.directions = [
           [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3]
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
        this.energy -= 3
        if(empty) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 4
            matrix[this.y][this.x] = 0
            this.x = newx
            this.y = newy
        }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newx = empty[0]
            var newy = empty[1]
            matrix[newy][newx] = 4;
            var newvs = new Virus(newx, newy, 4)
            virusarr.push(newvs)
        }
    }
    eat() {
        var food = random(this.chooseCell(3))
        if(food) {
            var newx = food[0]
            var newy = food[1]
            matrix[newy][newx] = 4
            matrix[this.y][this.x] = 0

            for(var i in gishaticharr) {
                if(gishaticharr[i].x == newx && gishaticharr[i].y == newy){
                    gishaticharr.splice(i,1)
                }
            }
            this.x = newx
            this.y = newy
            this.energy += 3
        }
    }
    die() {
        if(this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for(var i in virusarr) {
                if(virusarr[i].x == this.x && virusarr[i].y == this.y) {
                    virusarr.splice(i,1)
                }
            }
        }
    }
}