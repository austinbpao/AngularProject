import { Component, OnInit, Input } from '@angular/core';
import { checkItems } from '../../assets/journaldata';
import { CheckItem } from '../check-item';
import { ChecksService } from '../checks.service';
import { JournalEntry } from '../journal-entry';
import { JournalEntryService } from '../journal-entry.service';

@Component({
  selector: 'app-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.css']
})
export class CheckItemComponent implements OnInit {
  @Input() parentJournalEntry! : JournalEntry;
  @Input() checkItems! : CheckItem[];
  isDone = false;
  
  constructor(
    private checkService : ChecksService,
    private journalService : JournalEntryService
  ) {}

  ngOnInit(): void {
  }

  removeCheckItem(checkItem : CheckItem){
    this.journalService.removeCheckItem(checkItem, this.parentJournalEntry)
  }

}
