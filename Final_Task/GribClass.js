class Grib {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y],
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < Matrix[0].length && y >= 0 && y < Matrix.length) {
                if (Matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var Mul1 = this.chooseCell(0);
        var Mul2 = this.chooseCell(1);
        var CellsForMul = Mul1.concat(Mul2);
        var MulCell = random(CellsForMul);
        if (MulCell && this.multiply >= 10) {
            var newX = MulCell[0];
            var newY = MulCell[1];
            Matrix[newY][newX] = 4;
            var newGrib = new Grib(newX, newY);
            GribArr.push(newGrib);
            this.multiply = 0;
        }
    }
}