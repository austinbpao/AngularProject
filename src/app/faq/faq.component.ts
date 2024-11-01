import { Component, OnInit } from '@angular/core';
import { FAQ } from '../faq';
import { faqs } from 'src/assets/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  faqs = faqs;

  constructor() { }

  ngOnInit(): void {
  }

}
