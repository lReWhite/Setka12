import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';
import {DropEvent} from 'ng-drag-drop';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  rows: FormControl;
  cols: FormControl;
  matrix;
  colsArr;
allArray:
  [{},
  {}];



  constructor() { }

  list1 = [
    {name: 'b200'},
    {name: 'b210'},
    {name: 'b230'}
  ];

  list2 = [

  ];
  onList1Drop(e: DropEvent) {
    this.list1.push(e.dragData);
    this.removeItem(e.dragData, this.list2)
  }

  onList2Drop(e: DropEvent) {
    this.list2.push(e.dragData);
    this.removeItem(e.dragData, this.list1)
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
  ngOnInit() {
  this.rows = new FormControl(0);
  this.cols = new FormControl(0);
  this.rows.valueChanges.subscribe(value => {
    if (value) {
     this.matrix = Array.from({length: Number(value)}, (v, k) => k + 1);
    } else {
      this.matrix = [];
    }
  });
  this.cols.valueChanges.subscribe(value => {
    if(value) {
      this.colsArr =  Array.from({length: Number(value)}, (v, k) => k + 1);
    } else {
      this.colsArr = [];
    }
  });
    // new Array(this.value1).fill(null);
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

}
