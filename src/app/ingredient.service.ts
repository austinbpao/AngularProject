import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  items : Ingredient[];
  http : HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient
    this.items = [] as Ingredient[];
  }

  addToIngredients(ingredient : Ingredient){
    return this.http.put<any>('http://192.168.0.8:81/ingredient', this.convertToOunce(ingredient), {observe: 'body', responseType: 'json'});
  }

  getIngredients(){
    return this.http.get<any>('http://192.168.0.8:81/ingredient', {observe: 'body', responseType: 'json'});
  }

  clearIngredients(){
    this.items = [] as Ingredient[];
    return this.items;
  }

  updateIngredient(ingredient : Ingredient){
    return this.http.post<any>('http://192.168.0.8:81/ingredient', this.convertToOunce(ingredient), {observe: 'body', responseType: 'json'});
  }

  removeFromIngredients( ingredient : Ingredient){
    const ingredientIndex = this.items.indexOf(ingredient);
    this.items.splice(ingredientIndex);
  }

  convertToOunce(ingredient : Ingredient) : Ingredient {
    if(ingredient.unit){
      switch (ingredient.unit.toUpperCase()){
          case "TABLESPOON":
            ingredient.quantity = ingredient.quantity * .5;
              break;
          case "CUP":
            ingredient.quantity = ingredient.quantity * 8;
              break;
          case "TEASPOON":
            ingredient.quantity = ingredient.quantity * .1666667;
              break;
          case "POUND":
            ingredient.quantity = ingredient.quantity * 16;
              break;
      }
    }
    return ingredient;
  }
}
