import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  value1: string;
  value2: string;

  constructor() { }

  ngOnInit() {
  }

}
