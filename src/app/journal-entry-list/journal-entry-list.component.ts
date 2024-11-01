import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { journalEntries } from 'src/assets/journaldata';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css']
})
export class JournalEntryListComponent implements OnInit {

  journalEntries = journalEntries;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
