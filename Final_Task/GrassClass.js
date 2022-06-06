class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        // this.directions = [
        //     [this.x, this.y],
        // ];
    }
    //push bdi enel


    // constructor(x, y) {
    //     this.x = x;
    //     this.y = y;
    //     this.multiply = 0;

    // this.directions = [
    //     [this.x - 1, this.y - 1],
    //     [this.x, this.y],
    //     [this.x, this.y - 1],
    //     [this.x + 1, this.y - 1],
    //     [this.x - 1, this.y],
    //     [this.x + 1, this.y],
    //     [this.x - 1, this.y + 1],
    //     [this.x, this.y + 1],
    //     [this.x + 1, this.y + 1]
    // ];
    // }

    // chooseCell(character) {
    //     return super.chooseCell(character);
    // }

    //Multiply of grass

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 3) {
            var newX = newCell[0];
            var newY = newCell[1];
            Matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            GrassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}
