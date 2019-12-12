import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule
  ]
})
export class PageModule { }
