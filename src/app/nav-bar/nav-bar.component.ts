import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentIndex! : number;

  constructor(private route:ActivatedRoute) { 
    const routeParams = this.route.snapshot.paramMap;
    const journalIdFromRoute = Number(routeParams.get('journalId'));
  }

  ngOnInit(): void {
  }

}
