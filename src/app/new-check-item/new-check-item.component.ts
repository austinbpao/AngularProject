import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CheckItem } from '../check-item';
import { ChecksService } from '../checks.service';
import { checkItems } from 'src/assets/journaldata';
import { CheckItemComponent } from '../check-item/check-item.component';
import { JournalEntry } from '../journal-entry';
import { JournalEntryService } from '../journal-entry.service';

@Component({
  selector: 'app-new-check-item',
  templateUrl: './new-check-item.component.html',
  styleUrls: ['./new-check-item.component.css']
})
export class NewCheckItemComponent implements OnInit {

  @Input() parentJournalEntry! : JournalEntry;

  checkItemForm = this.formBuilder.group({
    id: 0,
    name : '',
    isDone: false

  })

  onSubmit(): void {
    this.journalService.addCheckItem({...this.checkItemForm.value as CheckItem}, this.parentJournalEntry);
    this.checkItemForm.reset();
  }

  constructor(
    private journalService : JournalEntryService,
    private formBuilder : FormBuilder
    ) {}

  ngOnInit(): void {
  }

}
