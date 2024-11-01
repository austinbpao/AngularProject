import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../order.service';
import { DrinkOrder } from '../drinkorder';
import { DrinkService } from '../drink.service';
import { DrinkRecipe } from '../drink-recipe';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-drink-order',
  templateUrl: './drink-order.component.html',
  styleUrls: ['./drink-order.component.css']
})
export class DrinkOrderComponent implements OnInit {
  @Output() orderSubmission = new EventEmitter();
  order : DrinkOrder;
  orderForm = this.formBuilder.group({
    drinkId : [0, Validators.required],
    customerName : ['', Validators.required],
    instructions : ''
  })
  ordering : boolean;
  drinks : DrinkRecipe[];
//  softDrinks : DrinkRecipe[];

  constructor(
    private orderService : OrderService,
    private drinkService : DrinkService,
    private formBuilder : FormBuilder
  ) { 
    this.ordering=false;
    this.drinks = [] as DrinkRecipe[];
    drinkService.getDrinks().subscribe(data  => this.drinks = (data as any).object);
    //this.softDrinks=drinkService.getSoftDrinks();
    this.order = new DrinkOrder();
  }

  ngOnInit(): void {
  }

  submitOrder() : void {
    if(this.orderForm.valid)
    {
      this.order.id=this.orderService.getNextId();
      this.order.drink = this.drinkService.getDrinkById(this.orderForm.value.drinkId!);
      this.order.customerName = this.orderForm.value.customerName!;
      this.orderService.addToOrders({...this.order});
      console.log(this.orderService.getOrders());
      this.orderForm.reset();
      //does this orphan object references?  Does that matter?
      this.order = new DrinkOrder();
      this.orderSubmission.emit()
    } else if(this.orderForm.controls.customerName.dirty)
    {

    }
  }


}
