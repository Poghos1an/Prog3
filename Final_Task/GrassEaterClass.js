class GrassEater extends LivingCreature{
    constructor(x,y){
        super(x,y);
        this.energy = 20;
    }

    // constructor(x, y) {
    //     this.x = x;
    //     this.y = y;
    //     this.directions = [];
    //     this.energy = 20;
    // }
    

    getNewCoordinates() {
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
        this.getNewCoordinates();
        return super.chooseCell(character);
    }



    move() {
        this.energy -= 2;
        var emptyCells = this.chooseCell(0);
        var YellowNewCordinate = random(emptyCells);

        if (YellowNewCordinate && this.energy >= 0) {
            Matrix[this.y][this.x] = 0;
            this.x = YellowNewCordinate[0];
            this.y = YellowNewCordinate[1];
            //Change color to yellow = 2
            Matrix[this.y][this.x] = 2;
        } else {
            this.die()
        }
    }
    //Eat grass (1) and energetik (5) cells
    eat() {
        var greenCells = this.chooseCell(1);
        let EatenGreenCell = random(greenCells)
        var EnergetikCells = this.chooseCell(5);
        let EatenEnergetikCell = random(EnergetikCells)

        if (EatenEnergetikCell) {
            Matrix[this.y][this.x] = 0;
            this.x = EatenEnergetikCell[0];
            this.y = EatenEnergetikCell[1];

            for (let index1 = 0; index1 < EnergetikArr.length; index1++) {
                if (EnergetikArr[index1].x == this.x && EnergetikArr[index1].y == this.y) {
                    //removing eaten element
                    EnergetikArr.splice(index1, 1);
                    Matrix[this.y][this.x] = 2;
                    break;
                }
            }

            for (let index1 = 0; index1 < GrassEaterArr.length; index1++) {
                if (GrassEaterArr[index1].x == this.x && GrassEaterArr[index1].y == this.y) {
                    //removing eaten element
                    Matrix[this.y][this.x] = 6;
                    GrassEaterArr.splice(index1, 1);
                    var KillerElement = new Killer(this.x, this.y);
                    KillerArr.push(KillerElement);
                    break;
                }
            }
        } else if (EatenGreenCell) {
            Matrix[this.y][this.x] = 0;
            this.x = EatenGreenCell[0];
            this.y = EatenGreenCell[1];
            //Change eaten cell colour to yellow = 2
            Matrix[this.y][this.x] = 2;
            this.energy++;

            for (let index = 0; index < GrassArr.length; index++) {
                if (GrassArr[index].x == this.x && GrassArr[index].y == this.y) {
                    //removing eaten element
                    GrassArr.splice(index, 1);
                    break;
                }
            }
            //Yellow multiply
            if (this.energy > 20) {
                this.mul()
            }
        }
        else {
            this.move();
        }
    }

    //Multiply of Yellow
    mul() {
        var emptyCells = this.chooseCell(0);
        var YellowNew = random(emptyCells);

        if (YellowNew) {
            Matrix[YellowNew[1]][YellowNew[0]] = 2;

            var newEater = new GrassEater(YellowNew[0], YellowNew[1]);
            GrassEaterArr.push(newEater);
            this.energy = 8
        }
    }
    //Delete yellow cell
    die() {
        Matrix[this.y][this.x] = 0;
        for (let index = 0; index < GrassEaterArr.length; index++) {
            if (GrassEaterArr[index].x == this.x && GrassEaterArr[index].y == this.y) {
                //removing dieing element
                GrassEaterArr.splice(index, 1);
                break;
            }
        }
    }
}