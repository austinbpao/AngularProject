export class Ingredient {
    id : number;
    name : string;
    quantity: number;
    unit : string;

    constructor () {
        this.id = 0;
        this.name = "";
        this.quantity = 0;
        this.unit = "Oz";
    }
    
    convertToOunce() : Ingredient {
        switch (this.unit.toUpperCase()){
            case "TABLESPOON":
                this.quantity = this.quantity * .5;
                break;
            case "CUP":
                this.quantity = this.quantity * 8;
                break;
            case "TEASPOON":
                this.quantity = this.quantity * .1666667;
                break;
            case "POUND":
                this.quantity = this.quantity * 16;
                break;
        }
    return this;
    }
}

