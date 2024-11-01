import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DrinkOrder } from './drinkorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: DrinkOrder[] = [] as DrinkOrder[];
  http : HttpClient;
  

  constructor(private httpClient : HttpClient) {
    this.http = httpClient;
  }

  addToOrders(drinkOrder : DrinkOrder){
    this.items.push(drinkOrder);
  }

  getOrders(){
    return this.http.get<any>('http://192.168.0.8:81/Order', {observe: 'body', responseType: 'json'});
  }

  getOrderById(id : number){
    return this.items[this.items.findIndex(x =>x.id == id)];
  }

  getNextId(){
    return Math.max(...this.items.map(x => x.id))+1
  }

  clearOrders(){
    this.items = [] as DrinkOrder[];
    return this.items;
  }

  completeOrder(drinkOrder : DrinkOrder){
    const itemIndex = this.items.indexOf(drinkOrder)
    this.items.splice(itemIndex);
    window.alert("Order completed!  Your drink is on it's way!")
  }

  removeFromOrders( drinkOrder : DrinkOrder){
    const itemIndex = this.items.indexOf(drinkOrder)
    this.items.splice(itemIndex);
    window.alert("Order canceled!  Better luck next time?")
  }

}
