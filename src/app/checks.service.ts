import { ElementRef, Injectable } from '@angular/core';
import { CheckItem } from './check-item';
import { checkItems } from 'src/assets/journaldata';

@Injectable({
  providedIn: 'root'
})
export class ChecksService {
  items: CheckItem[] = checkItems;
  constructor() { }

  addToChecks(checkItem: CheckItem){
    this.items.push(checkItem);
  }

  getChecks(){
    return this.items;
  }

  clearChecks(){
    this.items = [];
    return this.items;
  }

  removeFromChecks(checkItem : CheckItem){
    const itemIndex = this.items.indexOf(checkItem)
    this.items.splice(itemIndex);
  }
}
