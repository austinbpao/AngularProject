import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  ingredients = [] as Ingredient[];

  selectedIngredient : Ingredient = new Ingredient();


  constructor(private ingredientService :IngredientService) { 
    ingredientService.getIngredients().subscribe(data => {
    this.ingredients = (data as any).object;
    })
  }
  ngOnInit(): void {
  }

}
