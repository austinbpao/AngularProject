import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { journalEntries } from 'src/assets/journaldata';
import { JournalEntry } from '../journal-entry';

@Component({
  selector: 'app-journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.css']
})
export class JournalPageComponent implements OnInit {
  journal! : JournalEntry;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const journalIdFromRoute = Number(routeParams.get('journalId'));

    this.journal = journalEntries.find(journal => journal.id === journalIdFromRoute) ?? new JournalEntry();
  }

}
