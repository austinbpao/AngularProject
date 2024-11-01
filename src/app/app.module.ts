import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckItemComponent } from './check-item/check-item.component';
import { NewCheckItemComponent } from './new-check-item/new-check-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TextEntryComponent } from './text-entry/text-entry.component';
import { JournalPageComponent } from './journal-page/journal-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { JournalEntryListComponent } from './journal-entry-list/journal-entry-list.component';
import { DrinkMenuComponent } from './drink-menu/drink-menu.component';
import { journalEntries } from 'src/assets/journaldata';
import { FAQComponent } from './faq/faq.component';
import { DrinkOrderComponent } from './drink-order/drink-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CommaPipe } from './pipes/comma-pipe';
import { PluralPipe } from './pipes/plural-measure-pipe';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckItemComponent,
    NewCheckItemComponent,
    NavBarComponent,
    TextEntryComponent,
    JournalPageComponent,
    JournalEntryListComponent,
    DrinkMenuComponent,
    FAQComponent,
    DrinkOrderComponent,
    OrderListComponent,
    CommaPipe,
    PluralPipe,
    RecipeBookComponent,
    AddIngredientComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : 'journalentries', component: JournalEntryListComponent, title: 'Journal Entries'},
      { path : 'journalentry/:journalId', component:JournalPageComponent, title: 'Journal Entry' },
      { path : 'drinkmenu', component:DrinkMenuComponent, title: 'Drink Menu' },
      { path : 'orders', component:OrderListComponent, title: 'Orders'},
      { path : 'faq', component:FAQComponent, title: 'FAQ'},
      { path : 'recipebook', component:RecipeBookComponent, title : 'Recipe Book'},
      { path: 'addingredient', component:AddIngredientComponent, title: 'Ingredient Management'},
      { path : '', redirectTo: 'drinkmenu', pathMatch:'full'}
    ])
  ],
  providers: [PluralPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
