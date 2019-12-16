import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgDragDropModule} from 'ng-drag-drop';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot()

  ]
})
export class PageModule { }
