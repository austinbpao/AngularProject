import { Component, OnInit } from '@angular/core';
import { DrinkOrder } from '../drinkorder';
import { OrderService } from '../order.service';
import { Route, ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders : DrinkOrder[];

  constructor(
    private orderService : OrderService,
    private router : Router
  ) { 
    this.orders = [] as DrinkOrder[];
    orderService.getOrders().subscribe(data => this.orders = (data as any).object);
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart && event.url == '/orders')
    //   {
    //     this.orders = this.orderService.getOrders();
    //     console.log(this.orders);
    //   }
    //   else if (event instanceof NavigationStart){
    //     console.log(event);
    //   }
    // })
  }

  completeOrder(drinkOrder : DrinkOrder){
    this.orderService.completeOrder(drinkOrder);
  }

  cancelOrder(drinkOrder : DrinkOrder){
    this.orderService.removeFromOrders(drinkOrder);
  }

  ngOnInit(): void {
  }

}
