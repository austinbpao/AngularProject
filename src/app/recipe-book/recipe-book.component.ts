import { Component, ElementRef, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { DrinkRecipe } from '../drink-recipe';
import { PluralPipe } from '../pipes/plural-measure-pipe';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  drinks = [] as DrinkRecipe[];
  categories = [] as ( string )[];
  drinksByCategories = {} as Map<string, DrinkRecipe[]>
  ordering = false;


  constructor(private elementRef:ElementRef,
    private drinkService : DrinkService,
    private pluralPipe : PluralPipe) {
      this.drinksByCategories = new Map<string, DrinkRecipe[]>();
      //fetch a list of drinks, then sort them into their categories
      drinkService.getDrinks().subscribe(data  => {
        this.drinks = (data as any).object; 
        this.categories = [...new Set(this.drinks.map(item => item.subcategory!))];
        this.categories.forEach(item => this.drinksByCategories.set(item, this.drinks.filter(drink => drink.subcategory === item)))
      });
    }

  ngOnInit(): void {
  }

}
