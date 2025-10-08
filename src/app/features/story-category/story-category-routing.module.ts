import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryCategoryComponent } from './story-category.component';

const routes: Routes = [{ path: '', component: StoryCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryCategoryRoutingModule { }
