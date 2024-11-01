import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html',
  styleUrls: ['./text-entry.component.css']
})
export class TextEntryComponent implements OnInit {
  @Input() accomplishText = '';
  @Input() gratitudeText = '';
  @Input() planText='';

  constructor() { }

  ngOnInit(): void {
  }

}
