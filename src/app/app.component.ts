import { Component } from '@angular/core';
import { journalEntries } from 'src/assets/journaldata';
import { DataTableComponent } from './data-table/data-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JournalingWebPage';
  journalEntries = journalEntries;
}
