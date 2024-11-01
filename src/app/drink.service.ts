import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { drinks, softDrinks } from 'src/assets/drinks';
import { DrinkRecipe } from './drink-recipe';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ServerResponse } from './serverresponse';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  items : DrinkRecipe[];
//  softDrinks : DrinkRecipe[];
  http : HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
    this.items = [] as DrinkRecipe[];
//    this.softDrinks = softDrinks;
  }

  addToRecipes(drinkRecipe : DrinkRecipe){
    this.items.push(drinkRecipe);
  }

  getDrinks(){
    return this.http.get<any>('http://192.168.0.8:81/Drink', {observe: 'body', responseType: 'json'});
  }

  // getSoftDrinks(){
  //   return this.softDrinks;
  // }

  getDrinkById(id : number){
    return this.items[this.items.findIndex(x =>x.id == id)];
  }

  getNextId(){
    return Math.max(...this.items.map(x => x.id))+1
  }

  clearRecipes(){
    this.items = [] as DrinkRecipe[];
    return this.items;
  }

  removeFromRecipes( drinkRecipe : DrinkRecipe){
    const itemIndex = this.items.indexOf(drinkRecipe)
    this.items.splice(itemIndex);
  }
}
