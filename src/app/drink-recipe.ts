import { TitleStrategy } from "@angular/router";
import { Ingredient } from "./ingredient";

export class DrinkRecipe {
    id : number;
    name : string;
    ingredients?: Ingredient[];
    category?: string;
    subcategory?: string;

    constructor () {
        this.id=0;
        this.name = "",
        this.ingredients = [] as Ingredient[];
        this.category = "";
        this.subcategory = "";
    }

}