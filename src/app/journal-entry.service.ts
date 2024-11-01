import { Injectable } from '@angular/core';
import { JournalEntry } from './journal-entry';
import { journalEntries } from 'src/assets/journaldata';
import { CheckItem } from './check-item';

@Injectable({
  providedIn: 'root'
})
export class JournalEntryService {
  journalEntries: JournalEntry[] = journalEntries;

  constructor() { }

  addToEntries(entry:JournalEntry){
    this.journalEntries.push(entry);
  }

  getEntries(){
    return this.journalEntries;
  }

  removeCheckItem(checkItem: CheckItem, entry:JournalEntry){
    const checkItemIndex = entry.toDoCheckList.indexOf(checkItem);
    entry.toDoCheckList.splice(checkItemIndex);
  }

  addCheckItem(checkItem: CheckItem, entry:JournalEntry){
    entry.toDoCheckList.push(checkItem);
  }
}
