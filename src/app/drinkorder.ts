import { DrinkRecipe } from "./drink-recipe";
import { Ingredient } from "./ingredient";

export class DrinkOrder {
    id: number;
    customerName : string;
    drink : DrinkRecipe;
    instructions : string;
    complete : boolean;

    constructor(){
        this.id = 0;
        this.customerName = "";
        this.drink = new DrinkRecipe();
        this.instructions = "";
        this.complete = false;
    }


}