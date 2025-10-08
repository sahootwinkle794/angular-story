import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryCategoryRoutingModule } from './story-category-routing.module';
import { StoryCategoryComponent } from './story-category.component';


@NgModule({
  declarations: [
    StoryCategoryComponent
  ],
  imports: [
    CommonModule,
    StoryCategoryRoutingModule
  ]
})
export class StoryCategoryModule { }
