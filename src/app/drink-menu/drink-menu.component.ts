import { Component, ElementRef, OnInit } from '@angular/core';
//import { drinks, softDrinks } from 'src/assets/drinks';
import { DrinkService } from '../drink.service';
import { DrinkRecipe } from '../drink-recipe';
import { PluralPipe } from '../pipes/plural-measure-pipe';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.css']
})
export class DrinkMenuComponent implements OnInit {

  drinks = [] as DrinkRecipe[];
  categories = [] as ( string )[];
  drinksByCategories = {} as Map<string, DrinkRecipe[]>
//  softDrinks = softDrinks;
  ordering = false;

  order() {
    this.ordering=true;
  }

  closeOrder() {
    this.ordering=false;
  }

  constructor(private drinkService : DrinkService,
    private pluralPipe : PluralPipe) {
      this.drinksByCategories = new Map<string, DrinkRecipe[]>();
      //fetch a list of drinks, then sort them into their categories
      drinkService.getDrinks().subscribe(data  => {
        this.drinks = (data as any).object; 
        this.categories = [...new Set(this.drinks.map(item => item.subcategory!))];
        this.categories.forEach(item => this.drinksByCategories.set(item, this.drinks.filter(drink => drink.subcategory === item)))
      });
    }


  stopProp(event : any){
    event.stopPropagation();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
